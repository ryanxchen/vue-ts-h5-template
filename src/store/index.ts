import Vue from 'vue'
import Vuex from 'vuex'
import { IHomeState } from './modules/home'

Vue.use(Vuex)

export interface IRootState {
  home: IHomeState
}
export default new Vuex.Store<IRootState>({})
