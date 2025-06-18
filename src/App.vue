<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Movie Explorer</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon to="/favorites" title="Favorites">
        <v-icon color="red">mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main >
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useMovieStore } from './stores/movieStore'

const store = useMovieStore()
store.loadFavorites()

</script>

<style scoped>
</style>
