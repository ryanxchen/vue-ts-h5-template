<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <!-- <p>{{ stateTotal }}</p> -->
    <p>{{ getterTotal }}</p>
    <p>{{ time | formateTime }}</p>
    <p>{{ obj }}</p>
    <p><sq-agree v-model="isAgree">agree</sq-agree></p>
    <sq-button type="primary" @click="add">{{ mes }}</sq-button>
  </div>
</template>

<script lang="ts">
import { Route } from 'vue-router'
import { Component, Vue, Watch } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import { HomeModule } from '@/store/modules/home'

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
export default class extends Vue {
  isAgree: boolean = true
  message: number = 1
  obj: any = { a: 1 }
  time: Date = new Date()

  get getterTotal () {
    return HomeModule.getTotal
  }

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
    HomeModule.add().then(() => {
      console.log('after add - then')
    })
    .catch(() => {
      console.log('after add - catch')
    })

    // console.log('this.$route:', this.$route)
    // console.log('this.$router:', this.$router)
    // setTimeout(() => {
    //   this.$router.push('/about')
    // }, 3000)
  }

  beforeRouteEnter (
    to: Route,
    from: Route,
    next: () => void
  ): void {
    console.log('home-beforeRouteEnter')
    next()
  }

  beforeRouteLeave (
    to: Route,
    from: Route,
    next: () => void
  ): void {
    console.log('home-beforeRouteLeave')
    next()
  }

  created () {
    console.log('created')
  }
}
</script>
