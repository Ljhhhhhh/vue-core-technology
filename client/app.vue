<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}}</p>
    <p>{{counter}}</p>
    <router-link to="/app/123">app1</router-link>
    <router-link to="/app/456">app2</router-link>
    <router-link to="/login">login</router-link>
    <!-- <div>{{textA}}</div>
    <div>{{textB}}</div>
    <div>{{textC}}</div> -->
    <!-- <router-link to="/login/exact">login/exact</router-link> -->
    <!-- // -->
    <!-- <todo></todo> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
      <!-- <router-view name="a" /> -->
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
import {
  mapState, mapGetters, mapMutations, mapActions
  // mapGetters,
  // mapMutations
} from 'vuex'

export default {
  metaInfo: {
    title: 'LuJiehui\'s todo app'
  },
  methods: {
    ...mapActions(['updateCountAsync']), // , 'a/add', 'b/testAction'
    ...mapMutations(['updateCount']) // , 'a/updateText'
  },
  mounted () {
    console.log('123', this.textPlus)
    // let i = 1
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // this['a/add']()
    // this['a/updateText']('123')
    // this['b/testAction']()
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
  },
  computed: {
    textA () {
      return this.$store.state.a.text
    },
    ...mapState({
      // 'count'
      // counter: 'count'
      counter: (state) => state.count
      // textB: state => state.b.text,
      // textC: state => state.c.text
    }),
    ...mapGetters({
      'fullName': 'fullName'
      // 'textPlus': 'a/textPlus'
    })
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  components: {
    Header,
    Footer
    // Todo
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


