import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <span>Name: {{Name}}</span>
      <span>Name: {{getName()}}</span>
      <p>{{number}}</p>
    </div>
  `,
  data: {
    firstName: 'Lu',
    lastName: 'JieHui',
    number: 0,
    obj: {
      a: 0
    }
  },
  computed: {
    Name () {
      return `${this.firstName} ${this.lastName}`
    },
    gname: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (gname) {
        const names = gname.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    // 'obj.a' 监听对象内部的数据 注意是字符串形式
    firstName: {
      handler (newName, oldName) { // 立即执行watch (默认初始化时不执行)
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true,
      deep: true // 对象内部的改动也可以被触发 如obj.a
    }
  },
  methods: {
    getName () {
      return `${this.firstName} ${this.lastName}`
    }
  }
})
