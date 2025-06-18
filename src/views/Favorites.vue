<template>
  <v-container fluid>
    <v-btn
      @click="$router.back()"
      class="mb-4"
      color="primary"
      variant="outlined"
    >
      <v-icon start>mdi-arrow-left</v-icon>
      Back
    </v-btn>
    <v-row class="mb-6">
      <v-col>
        <h1 class="text-h4 font-weight-bold"> Your Favorite Movies</h1>
        <p class="text-subtitle-1">A collection of movies you love</p>
      </v-col>
    </v-row>

    <v-row v-if="favorites.length" dense>
      <v-col
        v-for="movie in favorites"
        :key="movie.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            class="rounded-lg transition-fast-in-fast-out"
            :elevation="isHovering ? 12 : 2"
          >
            <v-img
              :src="getImageUrl(movie.poster_path)"
              height="300px"
              cover
            />

            <v-card-title class="text-wrap">{{ movie.title }}</v-card-title>

            <v-card-subtitle>
              <v-chip size="small" color="primary" variant="tonal">
                {{ movie.release_date?.split('-')[0] || 'N/A' }}
              </v-chip>
            </v-card-subtitle>

            <v-card-text class="pb-0">
              <div class="text-truncate mb-2">
                {{ movie.overview || 'No description available.' }}
              </div>
              <v-rating
                :model-value="Math.round(movie.vote_average)"
                color="amber"
                background-color="grey-lighten-1"
                length="10"
                half-increments
                readonly
                size="18"
              />
            </v-card-text>

            <v-card-actions>
              <v-btn
                icon
                color="red"
                @click.stop="removeFromFavorites(movie.id)"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-spacer />
              <v-btn variant="text" @click="$router.push(`/movie/${movie.id}`)">
                View Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <div v-else class="text-center my-16">
      <v-icon size="64" color="grey">mdi-heart-off-outline</v-icon>
      <p class="text-h6 mt-2">No favorites added yet</p>
      <v-btn color="primary" @click="$router.push('/')">Go to Search</v-btn>
    </div>

  
    <v-snackbar v-model="snackbar" timeout="2000" color="red" location="top">
      Removed from favorites
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { useMovieStore } from '../stores/movieStore'
import { computed, ref } from 'vue'

const store = useMovieStore()
const favorites = computed(() => store.favorites)

const snackbar = ref(false)

function removeFromFavorites(movieId) {
  store.removeFavorite(movieId)
  snackbar.value = true
}

const getImageUrl = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : 'https://via.placeholder.com/500x750?text=No+Image'
</script>
