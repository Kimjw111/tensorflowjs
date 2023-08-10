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
    component: () =>
      import(/* webpackChunkName: "about" , */ '../view/page2.vue')
  },
  {
    path: '/page3',
    name: 'page3',
    component: () =>
      import(/* webpackChunkName: "about" , */ '../view/page3.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
