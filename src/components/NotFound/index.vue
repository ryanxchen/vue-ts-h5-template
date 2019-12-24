<template>
  <div class="not-found">
    <div class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

@Component
export default class extends Vue {
  private getMsg () {
    return msgs[Math.floor(Math.random() * msgs.length)]
  }
}
</script>

<style lang="sass" scoped>
.content
  padding-top: 40px
</style>

