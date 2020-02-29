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
    {path:'/',redirect:'/home'},   //路径是/ 重定向到'/home'  这个路径；    {path:'/home',component:Home}这样写只是调用home组件，但路径 和下面的tab都没有变化
    {path:'/home',component:Home},
    {path:'/lists',component:Lists},
    {path:'/add',component:Add},
    {path:'/collect',component:Collect},
    {path:'/detail/:bookid',component:Detail,name:'detail'},    //路径参数，:bookid必须有，可以随机；
    // 当访问的路径是 /detail/1 会产生一个对象{bookid:1} 放在$route.params上
    {path:'*',redirect:'/home'}   //写在最后，如果是没找到的 也重定向到home路径，
  ]
})
