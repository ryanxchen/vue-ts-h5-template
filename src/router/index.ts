import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Vue from 'vue'
import Router, { Route } from 'vue-router'
import pages from './pages/index'

NProgress.configure({ showSpinner: false })

Vue.use(Router)

const router = new Router({
  base: '/',
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition ? savedPosition : { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '首页' },
      component: () => import(
        /* webpackChunkName: "home" */
        '@/views/Home/index.vue'
      )
    },
    ...pages,
    {
      path: '*',
      name: 'not-found',
      meta: {
        title: '404-页面不存在'
      },
      component: () => import(
        /* webpackChunkName: "not-found" */
        '@/components/NotFound/index.vue'
      )
    }
  ]
})

router.beforeEach((
  to: Route,
  from: Route,
  next: () => void
) => {
  /*如果需要登录，当前没有登录，直接跳转到登录页*/
  // if (to.meta.Auth && !store.state.loginStatus) {
  //   return next({ name: 'Login', query: { path: to.name } })
  // }
  NProgress.start()
  next()
})

router.afterEach((to: Route) => {
  to.meta.title && (document.title = to.meta.title)
  NProgress.done()
})

export default router
