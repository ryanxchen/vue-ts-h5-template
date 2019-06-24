import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.ts$/)
const modules: Record<string, object> = {} // or const modules: { [key: string]: object } = {}

files.keys().forEach((key: string) => {
  modules[key.replace(/(\.\/|\.ts)/g, '')] = files(key).default
})

export default new Vuex.Store({
  // state: {

  // },
  // mutations: {

  // },
  // actions: {

  // },
  modules
})
