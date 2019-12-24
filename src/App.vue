<template>
  <div id="app">
    <div id="nav" v-if="showNavHandle()" >
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Route } from 'vue-router'
import { Component, Vue, Watch } from 'vue-property-decorator'

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
])

@Component
export default class App extends Vue {
  routeName = ''

  @Watch('$route')
  private changeRouter (route: Route) {
    console.log(route)
    this.routeName = route.name || ''
  }

  private showNavHandle () {
    return !([
      'not-found'
    ].includes(this.routeName))
  }
}
</script>


<style lang="sass">
@import '@/assets/styles/global.sass'

#nav
  padding: 30px
  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active 
      color: $theme-color
</style>
