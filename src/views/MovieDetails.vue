<template>
    <v-container>
      <div v-if="store.loading" class="d-flex justify-center align-center" style="min-height: 300px;">
        <v-progress-circular indeterminate size="64" color="primary" />
      </div>
  
      <div v-else-if="movie">
        <v-btn @click="$router.back()" class="mb-6 mt-4" color="primary" variant="outlined">
        <v-icon start>mdi-arrow-left</v-icon>
        Back
      </v-btn>
        <v-row>
          <v-col cols="12" md="4">
            <v-img
              :src="getImageUrl(movie.poster_path)"
              height="500px"
              class="rounded-lg"
              cover
            />
          </v-col>
  
          <v-col cols="12" md="8">
            <h2 class="mb-2">
    {{ movie.title }} ({{ movie.release_date?.split('-')[0] }})
  </h2>

  <div class="d-flex align-center mb-4">
    <span class="text-body-1 font-weight-medium mr-2">Rating:</span>
    <v-rating
      :model-value="Math.round(movie.vote_average)"
      color="amber"
      background-color="grey-lighten-1"
      length="10"
      half-increments
      readonly
      size="24"
    />
    <span class="ml-2 text-grey-darken-1">
      {{ movie.vote_average.toFixed(1) }}/10
    </span>
  </div>

  <h3 class="mt-4 mb-2">Overview</h3>
  <p>{{ movie.overview }}</p>

  <v-tooltip text="Mark as Favorite" location="top">
            <template #activator="{ props }">
              <v-btn icon class="mt-4" :color="favColor" v-bind="props" @click="store.toggleFavorite(movie)">
                <v-icon>
                  {{ store.isFavorite(movie.id) ? 'mdi-heart' : 'mdi-heart-outline' }}
                </v-icon>
              </v-btn>
            </template>
          </v-tooltip>
          </v-col>
        </v-row>
      </div>
  
      <div v-else>
        <p>No movie found.</p>
      </div>
    </v-container>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { useMovieStore } from '../stores/movieStore'
  import { onMounted, computed } from 'vue'
  
  
  const route = useRoute()
  const store = useMovieStore()
  
  onMounted(() => {
    store.fetchMovieDetails(route.params.id)
  })
  
  const movie = computed(() => store.movieDetails)
  const favColor = computed(() => store.isFavorite(movie.value?.id) ? 'red' : 'grey')
  const getImageUrl = (path) =>
    path ? `https://image.tmdb.org/t/p/w500${path}` : 'https://via.placeholder.com/500x750?text=No+Image'
  </script>
  