import Vue from 'vue'

const chilcComponent = {
  template: `
    <div>chilcComponent{{data.value}}</div>
  `,
  inject: ['yeye', 'data'],
  mounted () {
    console.log(this.yeye, this.value)
  }
}

const component = {
  name: 'comp',
  components: {
    chilcComponent
  },
  template: `
    <div :style="style">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
      <slot :value="value" a="111"></slot>
      <chilc-component></chilc-component>
    </div>
  `,
  data () {
    return {
      value: 'chil',
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

new Vue({
  components: {
    comp: component
  },
  provide () { // 让当前组件的子孙组件通过inject拿到定义的值 默认不提供响应式
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    }) // 通过这个实现响应式
    return {
      yeye: this,
      data
    }
  },
  el: '#root',
  data () {
    return {
      value: 987
    }
  },
  template: `
    <div><comp ref="div">
      <span slot-scope="props" ref="span">{{props.value}}---{{props.a}}</span>
    </comp>
      <input v-model="value">
    </div>
    `,
  mounted () {
    console.log(this.$refs.div)
    console.log(this.$refs.span)
  }
  // slot-scope 拿到子组件内部的变量集合
})
