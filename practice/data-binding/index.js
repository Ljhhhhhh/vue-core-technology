import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <div>{{isActive ? 'active' : 'not active'}}{{arr.join('--')}}<p v-html="html"></p></div>
  // `,
  // <div :class="{active: !isActive}">
  template: `
    <div :class="[!isActive? 'active' : '']">
      <p v-html="html"></p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>666</span>'
  }
})
