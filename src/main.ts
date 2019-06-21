import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
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

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
