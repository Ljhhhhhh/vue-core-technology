import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  data: {
    text: 0,
    obj: {}
  },
  template: '<div ref="div">{{text}}</div>',
  // watch: {
  //   text (newText, oldText) {
  //     console.log(`${newText}--${oldText}`)
  //   }
  // },
  mounted () {
    //
  }
})

app.$mount('#root')

setInterval(() => {
  app.text += 1
  app.$set(app.obj, 'a', 999) // 如果是没有在data中初始化的值，不使用$set就不是响应式的，可以使用$set给新的值赋值（响应式） $forceUpdate()也有这个效果(强制更新)
  // app.$delete(app.obj.a)
  // app.$options.data.text += 1 // 无作用
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)

// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

// console.log(app.$root)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)

const unwatch = app.$watch('text', (newText, oldText) => {
  console.log(`${newText}--${oldText}`)
})
setTimeout(() => {
  unwatch()
}, 2000)

app.$on('test', (a, b) => {
  console.log(`test emited ${a}--${b}`)
})
// $once 只触发一次
app.$emit('test', 1, 2)

// app.$forceUpdate() // 强制重新渲染

// vue异步渲染  并非每一次操作都会重新渲染

// app.$nextTick() // 下一次dom渲染之后调用
