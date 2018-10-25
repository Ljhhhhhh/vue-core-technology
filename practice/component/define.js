import Vue from 'vue'

const compoent = {
  template: `
  <div>
    <div>this {{text}} compoent</div>
    <span v-show="active">see me?</span>
  </div>
  `,
  props: { // 不能改自身的props
    active: {
      // type: Boolean,
      validator (value) { // props的验证
        return typeof value === 'boolean'
      }
    }
  },
  data () {
    return {
      text: 123
    }
  }
}

// Vue.component('comp', compoent)

new Vue({
  el: '#root',
  template: '<div>123<comp :active="true"></comp></div>',
  components: {
    Comp: compoent
  }
})
