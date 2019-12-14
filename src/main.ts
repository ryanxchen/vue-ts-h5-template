import 'babel-polyfill'
import 'normalize.css'
import '@/lib/responsive'
import Vue, { DirectiveOptions } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import * as directives from '@/directives'
import * as filters from '@/filters'
import {
  Style,
  Button,
  Agree
} from '@insaic/neon'

Vue.use(Style)
  .use(Button)
  .use(Agree)

Vue.config.productionTip = false
FastClick.attach(document.body)

// 全局 directives
Object.keys(directives).forEach((key: string) => {
  Vue.directive(
    key,
    (directives as {
      [key: string]: DirectiveOptions
    })[key]
  )
})
// 全局 filter
Object.keys(filters).forEach((key: string) => {
  Vue.filter(
    key,
    (filters as {
      [key: string]: any
    })[key])
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
