<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <p>{{ stateTotal }}</p>
    <p>{{ getterTotal }}</p>
    <p>{{ time | formateTime }}</p>
    <p>{{ obj }}</p>
    <sq-button type="primary" @click="add">{{ mes }}</sq-button>
  </div>
</template>

<script lang="ts">
import { Route } from 'vue-router'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
import { Component, Vue, Watch } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

const homeStore = namespace('home')

@Component({
  components: {
    HelloWorld
  },
  filters: {
    formateTime (val: Date | string): number {
      return +new Date(val)
    }
  }
})
export default class Home extends Vue {
  message: number = 1
  obj: any = { a: 1 }
  time: Date = new Date()

  // @homeStore.Getter total!: number
  @homeStore.State('total') stateTotal!: number
  @homeStore.Getter('total') getterTotal!: number
  @homeStore.Action('addTotal') actionIncrement!: any

  @Watch('message')
  onMessageWatch (val: number, oldVal: number): void {
    console.log('message:', val, oldVal)
  }

  @Watch('obj.a')
  onObjWatch (val: any, oldVal: any): void {
    console.log('obj.a:', val, oldVal)
  }

  // @Watch('$route', { immediate: true, deep: true })
  // @Watch('$route')
  // onRouteWatch (val: Route) {
  //   console.log(val)
  // }

  get mes (): string {
    return `mes is ${this.message}`
  }

  add (): void {
    this.message++
    this.obj.a += 1
    this.actionIncrement().then(() => {
      console.log('then actionIncrement')
    })
    // console.log('this.$route:', this.$route)
    // console.log('this.$router:', this.$router)
    // setTimeout(() => {
    //   this.$router.push('/about')
    // }, 3000)
  }

  beforeRouteEnter (to: Route, from: Route, next: () => void): void {
    console.log('home-beforeRouteEnter')
    next()
  }

  beforeRouteLeave (to: Route, from: Route, next: () => void): void {
    console.log('home-beforeRouteLeave')
    next()
  }

  created () {
    console.log('created')
  }
}
</script>
