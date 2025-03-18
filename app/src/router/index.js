import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/squirelDataTime',
      name: 'squirelDataTime',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SquirelTimeChart.vue'),
    },
    {
      path: '/squirelDataFurColor',
      name: 'squirelDataFurColor',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SquirelDataFurColor.vue'),
    },
    {
      path: '/squirelLocation',
      name: 'squirelLocation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SquirelLocation.vue'),
    },
    {
      path: '/squirelActions',
      name: 'squirelActions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SquirrelActions.vue'),
    },
  ],
})

export default router
