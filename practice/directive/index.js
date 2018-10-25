import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>{{text}}</div>
  `,
  data: {
    text: 0,
    active: false,
    obj: {
      a: 'va',
      b: 'vb',
      c: 'vc'
    }
  }
})
// v-text
// v-html
// v-show
// v-if 重绘
// v-else
// v-else-if
// v-for (val,key,index) in obj
// v-model 修饰符 .number .trim（去除首尾空格） .lazy(onchange触发，不加则是input触发)
// v-pre 不解析表达式 类似 {{text}}不会被解析，会直接输出
// v-once 只执行一次绑定
