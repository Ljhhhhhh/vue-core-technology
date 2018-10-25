import Vue from 'vue'

const component = {
  name: 'comp',
  props: ['prop1'],
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  data () {
    return {
      value: 'chil',
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  },
  render (h) { // 实现template的模板 创建vnode的类
    return h('div', {
      style: this.style,
      on: {
        click: () => {
          this.$emit('click')
        }
      }
    }, [this.$slots.header,
      this.prop1
    ])
  }
}

new Vue({
  components: {
    comp: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value)
  },
  methods: {
    handleClick () {
      console.log('handleClicked')
    }
  },
  template: `
    <comp ref="comp">
    <span ref="span">123</span>
    </comp>
  `,
  render () { // 实现template的模板
    return this.$createElement('comp', {
      ref: 'comp',
      props: {
        prop1: this.value
      },
      on: {
        click: this.handleClick
      },
      nativeOn: {
        click: this.handleClick
      }
    }, [this.$createElement('span', {
      ref: 'span',
      slot: 'header',
      attrs: {
        id: 'test-id'
      },
      domProps: {
        innerHTML: '<span>345</span>'
      }
    }, this.value)])
  }
})
