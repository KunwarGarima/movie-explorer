import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: () => import('../views/MovieDetails.vue'), 
    props: true,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('../views/Favorites.vue') 
  },
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue') 
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
