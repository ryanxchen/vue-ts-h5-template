<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Route } from 'vue-router'

// Component.registerHooks([
//   'beforeRouteEnter',
//   'beforeRouteLeave',
//   'beforeRouteUpdate' // for vue-router 2.2+
// ])

@Component
export default class extends Vue {
  beforeRouteEnter (to: Route, from: Route, next: () => void): void {
    console.log('about-beforeRouteEnter')
    next()
  }

  beforeRouteLeave (to: Route, from: Route, next: () => void): void {
    console.log('about-beforeRouteLeave')
    next()
  }
}
</script>

