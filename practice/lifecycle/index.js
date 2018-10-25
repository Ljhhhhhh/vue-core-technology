import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeCreate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  render (h) { // 就是template
    throw new TypeError('render error')
    // console.log('render function')
    // return h('div', {}, this.text)
  },
  renderError (h, err) { // 本组件的错误 正式环境不可用
    return h('div', {}, err.stack)
  },
  errorCaptured () {
    // 向上冒泡，正式环境可用
  }
})

app.$mount('#root')
// setInterval(() => {
//   app.text += 1 // 执行beforeupdated/updated
// }, 1000)

setTimeout(() => {
  app.$destroy() // 销毁当前实例
}, 2000)
