import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '../pages/Home.vue'
import Lists from '../pages/Lists.vue'
import Add from '../pages/Add.vue'
import Collect from '../pages/Collect.vue'
import Detail from '../pages/Detail.vue'

export default new Router({
  routes: [
    {path:'/home',component:Home},
    {path:'/lists',component:Lists},
    {path:'/add',component:Add},
    {path:'/collect',component:Collect},
    {path:'/detail',component:Detail}
  ]
})
