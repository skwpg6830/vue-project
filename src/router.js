import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import VideoIntro from './views/VideoIntro.vue'

const routes = [
  {
    path: '/vue-project',
    name: 'home',
    component: Home
  },
  {
    path: '/video',
    name: 'video',
    component: VideoIntro
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
