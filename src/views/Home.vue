<script setup>
import { useMovieStore } from '../stores/movieStore'
import { ref, computed } from 'vue'
import MovieCard from '../components/MovieCard.vue'
import SearchForm from '../components/SearchForm.vue'

const store = useMovieStore()
const hasSearched = ref(false)
const showWarning = ref(false)

const currentPage = computed({
  get: () => store.currentPage,
  set: (val) => {
    store.currentPage = val
    searchMovies(val)
  }
})

const movies = computed(() => store.movies)
const totalPages = computed(() => store.totalPages)
const lastSearch = ref({
  title: '',
  year: '',
})

const searchMovies = (page = 1) => {
  if (!lastSearch.value.title && !lastSearch.value.year && !lastSearch.value.genre) {
    showWarning.value = true
    return
  }

  store.searchMovies({
    ...lastSearch.value,
    page
  })
}
const handleSearchSubmit = (form) => {
  lastSearch.value = { ...form } 
  hasSearched.value = true
  searchMovies(1) 
}
</script>

<template>
  <v-container fluid>
    <v-sheet class="pa-4" elevation="2" color="white">
      <SearchForm @submit="handleSearchSubmit"  />
    </v-sheet>

    <v-snackbar v-model="showWarning" color="red-darken-2" timeout="4000" location="top center">
      Please fill at least one field to search.
    </v-snackbar>

    <v-row v-if="hasSearched && movies.length === 0 && !showWarning" justify="center" class="mt-6">
      <v-col cols="12" class="text-center">
        <v-icon size="64" color="grey">mdi-movie-off</v-icon>
        <div class="text-h6 mt-2">No movies found</div>
        <div class="text-subtitle-1">Try different search criteria.</div>
      </v-col>
    </v-row>

    <v-row class="mt-4">
      <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="6" md="4" class="d-flex">
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-6">
      <v-pagination v-if="totalPages > 1" v-model="currentPage" :length="totalPages" :total-visible="7" />
    </v-row>
  </v-container>
</template>
