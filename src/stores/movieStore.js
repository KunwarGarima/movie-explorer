import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [],
    movieDetails:null,
    loading: false,
    error: null,
    totalPages: 0,
    currentPage: 1,
    favorites: [],
    genres: [],
  }),

  actions: {
    async fetchGenres() {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    
      try {
        const res = await axios.get(url)
        this.genres = res.data.genres
      } catch (e) {
        console.error('Genre Fetch Error:', e)
        this.error = e
      }
    },
    async searchMovies({ title, year, page = 1 }) {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY
        if (!Number.isInteger(page) || page < 1) {
            page = 1
          }
         let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(title)}&page=${page}`
        if (year) url += `&year=${year}`
        
       
    
      
        this.loading = true
        try {
          const res = await axios.get(url)
          this.movies = res.data.results
          this.totalPages = Math.min(res.data.total_pages, 500)
        this.currentPage = res.data.page
        } catch (e) {
          console.error('API Error:', e)
        } finally {
          this.loading = false
        }
    },
    async fetchMovieDetails(id) {
        this.movieDetails = null
        this.loading = true            
        const apiKey = import.meta.env.VITE_TMDB_API_KEY
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    
        try {
          const res = await axios.get(url)
          this.movieDetails = res.data
        } catch (e) {
          console.error('Details API Error:', e)
          this.error = e
        } finally {
          this.loading = false
        }
      },

      addFavorite(movie) {
        if (!this.isFavorite(movie.id)) {
          this.favorites.push(movie)
          this.saveFavorites()
        }
      },
    
      removeFavorite(movieId) {
        this.favorites = this.favorites.filter(m => m.id !== movieId)
        this.saveFavorites()
      },
    
      toggleFavorite(movie) {
        console.log('movie',movie);
        if (this.isFavorite(movie.id)) {
          this.removeFavorite(movie.id)
        } else {
          this.addFavorite(movie)
        }
      },
    
      isFavorite(movieId) {
        return this.favorites.some(m => m.id === movieId)
      },
    
      saveFavorites() {
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
      },
    
      loadFavorites() {
        const saved = localStorage.getItem('favorites')
        this.favorites = saved ? JSON.parse(saved) : []
      }


  
  },
})
