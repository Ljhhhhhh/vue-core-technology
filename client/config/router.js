import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    mode: 'history',
    routes,
    // base: '/base/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savePosition) { // 记录页面滚动位置
      if (savePosition) {
        return savePosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    },
    fallback: true
    // parseQuery (query) { // query转换

    // },
    // stringifyQuery (obj) { // query转换
    // }
  })
}
