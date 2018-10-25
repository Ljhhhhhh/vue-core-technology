import Vue from 'vue'

const compoent = {
  props: ['value'],
  name: 'root',
  template: `
  <div>
    <div>this is compoent</div>
    <input type="text" @input="handleInput">
  </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}

new Vue({
  components: {
    comp: compoent
  },
  el: '#root',
  data () {
    return {
      value: 123
    }
  },
  template: `
    <div><comp :value="value" @input="value=arguments[0]"></comp></div>
  `
})
