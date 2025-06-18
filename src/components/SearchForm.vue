<template>
    <v-form @submit.prevent="onSearch">
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field v-model="form.title" label="Title" dense variant="outlined" />
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            v-model="form.year"
            :items="yearOptions"
            label="Year"
            dense
            clearable
            variant="outlined"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            v-model="form.genre"
            :items="genreOptions"
            item-title="text"
            item-value="value"
            label="Genre"
            dense
            clearable
            variant="outlined"
          />
        </v-col>
        <v-col cols="12" md="3" class="d-flex align-center">
          <v-btn type="submit" color="blue-darken-4" class="text-white">Search</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </template>
  
  <script setup>
  import { ref,onMounted,computed } from 'vue'
  import { useMovieStore } from '../stores/movieStore'
  const store = useMovieStore()
  const emit = defineEmits(['submit'])
  
  const form = ref({
    title: '',
    year: '',
    genre: ''
  })
  
  const yearOptions = Array.from({ length: 2025 - 1950 + 1 }, (_, i) => (1950 + i).toString())

  onMounted(() => {
    store.fetchGenres()
  })
  const genreOptions = computed(() =>
  store.genres.map(g => ({ text: g.name, value: g.id }))
  )
  
  const onSearch = () => {
    emit('submit', { ...form.value })
  }
  </script>
  