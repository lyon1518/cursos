import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/indexApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/:title',
      name: 'index',
      component: index
    },
  ]
})
