import { createRouter, createWebHistory } from 'vue-router'
import ReduceStress from '../page/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ReduceStress
    },
    {
      path: '/reduce',
      name: 'reduce',
      component : () => import('../page/ReduceStress.vue')
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    },
    {
        path: '/improv',
        name: 'improv',
        component : () => import('../page/Improv.vue')
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
      //   component: () => import('../views/AboutView.vue')
      },
      {
        path: '/refresh',
        name: 'refresh',
        component : () => import('../page/Refresh.vue')
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
      //   component: () => import('../views/AboutView.vue')
      }
  ]
})

export default router