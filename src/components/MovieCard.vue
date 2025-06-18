<template>
    <v-card
      class="d-flex flex-column h-100 w-100"
      hover
      elevation="4"
      @click="$router.push(`/movie/${movie.id}`)"
      style="cursor: pointer"
    >
      <v-img :src="getImageUrl(movie.poster_path)" height="300px" />
      <v-card-title>
        
        <div class="text-truncate"  :title="movie.title">
    {{ movie.title }}
  </div>  <v-chip size="small" color="primary" variant="tonal">{{ movie.release_date?.split('-')[0] }} </v-chip>
      </v-card-title>
      <v-card-subtitle class="d-flex align-center">
        <v-rating
          :model-value="movie.vote_average / 2"
          half-increments
          readonly
          color="amber"
          background-color="grey-lighten-2"
          density="compact"
          size="small"
          class="me-2"
        />
        <span class="text-caption text-grey-darken-1">
          ({{ movie.vote_average.toFixed(1) }})
        </span>
      </v-card-subtitle>
      <v-card-text>{{ movie.overview }}</v-card-text>
    </v-card>
  </template>
  
  <script setup>
  defineProps({
    movie: Object
  })
  
  const getImageUrl = (path) =>
    path ? `https://image.tmdb.org/t/p/w342${path}` : 'https://placehold.co/300x450?text=No%20Image'
  </script>
  