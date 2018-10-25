import Vue from 'vue'

const compoent = {
  name: 'root',
  template: `
  <div>
    <div>this {{text}} compoent</div>
    <div v-if="active">see me?</div>
    <div>{{msg}}</div>
  </div>
  `,
  props: { // 不能改自身的props
    active: {
      type: Boolean,
      default: true
    },
    msg: {
      type: String
    }
  },
  data () {
    return {
      text: 123
    }
  },
  mounted () {
    console.log('comp mounted')
  },
  methods: {}
}

Vue.component('comp', compoent)

const componet2 = {
  name: 'comp2',
  extends: compoent,
  data () {
    return {
      text: 999
    }
  },
  mounted () {
    console.log(this.$parent.text)
  }
}

// const CompVue = Vue.extend(compoent)

// new CompVue({
//   name: 'comp',
//   el: '#root',
//   propsData: {
//     active: false,
//     msg: 'hello world'
//   },
//   mounted () {
//     console.log(this.$parent)
//   },
//   data: {
//     text: 321
//   }
// })

new Vue({
  el: '#root',
  components: {
    Comp2: componet2
  },
  template: '<comp2></comp2>'
})
