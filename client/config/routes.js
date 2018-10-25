// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: 'app'
  },
  {
    // path: '/app/:id',
    path: '/app',
    props: true, // 传到props
    // props: (route) => ({id: route.query.id}),
    component: () => import('../views/todo/todo.vue'), // 这里import 加上babel-plugin-syntax-dynamic-import插件完成异步加载
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'app ppa pap'
    },
    beforeEnter: (to, from, next) => {
      console.log('app route before enter')
      next()
    }
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    // components: {
    //   default: Login,
    //   a: Todo
    // }
    component: () => import('../views/login/login.vue')
  }
  // {
  //   path: '/login/exact',
  //   component: Login
  // }
]
