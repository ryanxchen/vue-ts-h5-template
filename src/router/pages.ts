import { RouteConfig } from 'vue-router'

const pages: RouteConfig[] = [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/index.vue')
  }
]

export default pages
