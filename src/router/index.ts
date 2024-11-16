import { createRouter, createWebHistory } from 'vue-router'
import JokesView from '@/views/JokesHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: JokesView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/JokesFavorites.vue'),
    },
    { path: '/:pathMatch(.*)*', component: JokesView }
  ],
})

export default router
