import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'List',
          component: () => import(/* webpackChunkName: "List" */ './views/List.vue')
        },
        {
          path: 'user',
          name: 'User',
          component: () => import(/* webpackChunkName: "User" */ './views/User.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
