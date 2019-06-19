import { GetterTree, Commit } from 'vuex'

interface State {
  total: number
}

const INCREMENT = 'INCREMENT'

const state: State = {
  total: 0
}

// getters
const getters: GetterTree<State, State> = {
  total: (st: State) => st.total
}

// actions
const actions = {
  addTotal (context: { commit: Commit }) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          context.commit(INCREMENT)
          resolve()
        }, 3000)
      } catch (error) {
        reject(error)
      }
    })
  }
}

// mutations
const mutations = {
  [INCREMENT] (st: State) {
    st.total += 1
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
