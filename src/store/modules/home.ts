import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators'
import store from '@/store'

export interface IHomeState {
  total: number
}

@Module({ name: 'home', store, dynamic: true, namespaced: true })
class Home extends VuexModule implements IHomeState {
  total = 0

  get getTotal () {
    return this.total
  }

  @Mutation
  ADD_TOTAL () {
    this.total += 1
  }

  @Action({ commit: 'ADD_TOTAL' })
  add () {
    return new Promise((resolve: any, reject: any) => {
      setTimeout(() => {
        console.log('action_add')
        resolve()
      }, 3000)
    })
  }
}

export const HomeModule = getModule(Home)
