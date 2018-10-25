import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)
// const root = document.createElement('div')
// document.body.appendChild(root)

const router = createRouter()
const store = createStore()

store.registerModule('c', { // 动态注册组件
  state: {
    text: 3
  }
})

// store.unregisterModule('c') // 解绑模块

// store.watch((state) => state.count + 1, (newCount) => { // 监听state变化
//   console.log(newCount, 'new count watch')
// })

store.subscribe((mutation, state) => {
  console.log(mutation.type)
  console.log(mutation.payload)
})

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

router.beforeEach((to, from, next) => { // 跳转之前
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/login') {
  //   next()
  //   // next({path: 'login'})
  // } else {
  //   next('/login')
  // }
  // next() // 必须执行
})

router.beforeResolve((to, from, next) => {
  console.log('before each resolve')
  next()
})

router.afterEach((to, from) => { // 跳转之后
  console.log('after each invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
