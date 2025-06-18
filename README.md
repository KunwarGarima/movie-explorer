# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
# Movie Explorer

A Vue 3 + Vite-based web application that allows users to search for movies using the [TMDB (The Movie Database)](https://www.themoviedb.org/) API. Users can search by title, year, view movie details, and manage a list of favorites.

---

## Features

- Search movies by title, year, or genre
- View movie details (overview, release year, rating, poster)
- Mark/unmark favorite movies (stored in local storage)
- Pagination support
- Responsive design using Vuetify
- State management with Pinia
- Vue Router for navigation

---

##Project Setup

1. **Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/movie-explorer.git
cd movie-explorer
```

2. **Install dependencies**

```bash
npm install
```

3. **Add your TMDB API key**

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

You can get your API key here: [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)

4. **Run the development server**

```bash
npm run dev
```

---

##Approach

### 1. **Search Functionality**
Used TMDB's `/search/movie` endpoint with query, year, and pagination parameters. Genre filter is not working as this api not support.

### 2. **Genre Dropdown**
Genres are fetched from TMDB's `/genre/movie/list` and stored in Pinia store. The genre dropdown is dynamically rendered from this data.

### 3. **Favorites**
Movies marked as favorites are saved in localStorage. The app checks and persists this state using Pinia actions.

### 4. **UI/UX**
Built with Vuetify 3, keeping accessibility and mobile responsiveness in mind.

---

##Project Structure

```
src/
  components/
    MovieList.vue
    MovieCard.vue
  pages/
    Home.vue
    MovieDetail.vue
  stores/
    movieStore.js
  App.vue
  main.js
```

---
## Author

**Garima Kunwar**

[GitHub Profile](https://github.com/KunwarGarima)
