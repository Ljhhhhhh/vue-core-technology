import Vuex from 'vuex'

import defaultState from './state/state'
import defaultMutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     updateCount (state, num) {
//       state.count = num
//     }
//   }
// })
const isDev = process.env.NODE_ENV === 'development'
export default () => {
  const store = new Vuex.Store({
    strict: isDev, // 不允许直接修改
    state: defaultState,
    mutations: defaultMutations,
    getters,
    actions,
    plugins: [
      (store) => {
        // store.subscribe(handler)
        console.log('my plugin invoked')
      }
    ],
    modules: {
      a: {
        namespaced: true, // 让mutations是模块内的，而非全局的
        state: {
          text: 1
        },
        mutations: {
          updateText (state, text) {
            console.log('state a', state)
            state.text = text
          }
        },
        getters: {
          textPlus (state, getters, rootState) { // rootState 全局的state
            return state.text + 'hello' + rootState.count
            // rootState.b.text
          }
        },
        actions: { // 默认本模块
          add ({state, commit, rootState}) {
            commit('updateText', rootState.count)
            commit('updateCount', {num: 56789}, {root: true}) // {root: true}指定是全局中的updateCount
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 2
        },
        actions: {
          testAction ({commit}) {
            commit('a/updateText', 'text text', {root: true})
          }
        }
      }
    }
  })

  if (module.hot) { // 热更替
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
