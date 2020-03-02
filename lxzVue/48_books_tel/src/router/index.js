import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 这样引用会把组件都打包到一个js里面，

import Home from '../pages/Home.vue'
/* import Lists from '../pages/Lists.vue'
import Add from '../pages/Add.vue'
import Collect from '../pages/Collect.vue' */
import Detail from '../pages/Detail.vue' 


export default new Router({
  routes: [
    {path:'/',redirect:'/home'},   //路径是/ 重定向到'/home'  这个路径；    {path:'/home',component:Home}这样写只是调用home组件，但路径 和下面的tab都没有变化
    {path:'/home',component:Home,meta:{keepAlive:true}},   //取的时候在this.$route.meta.keepAlive
    {path:'/lists',component:()=>import('../pages/Lists.vue')},
    {path:'/add',component:()=>import('../pages/Add.vue')},   //路由懒加载：--- component:()=>{return import('../pages/Add.vue')}的缩写
    ////组件不再是引入的组件，而是一个函数，当页面路径和path对应时，会执行这个函数，这个函数去动态的载入组件
    {path:'/collect',component:()=>import('../pages/Collect.vue')},
    {path:'/detail/:bookid',component:Detail,name:'detail'},    //路径参数，:bookid必须有，可以随机；
    // 当访问的路径是 /detail/1 会产生一个对象{bookid:1} 放在$route.params上
    {path:'*',redirect:'/home'}   //写在最后，如果是没找到的 也重定向到home路径，
  ]
})
