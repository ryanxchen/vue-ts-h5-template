import { RouteConfig } from 'vue-router'

const pages: RouteConfig[] = [
  {
    path: '/about',
    name: 'about',
    meta: { title: '关于' },
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/index.vue')
  }
]

export default pages
