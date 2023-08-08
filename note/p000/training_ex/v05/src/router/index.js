import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/page1.vue'

const routes = [
  {
    path: '/',
    name: 'page1',
    component: HomeView
  },
  {
    path: '/page2',
    name: 'page2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../view/page2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
