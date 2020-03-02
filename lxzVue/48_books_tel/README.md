
1. 安装vue-cli， 初始化项目
``` bash
npm install vue-cli -g
# 装完vue-cli后，命令行上就有一个vue的命令   vue-cli -V查看版本
# 安装vue-cli的作用：我们用它来创建一个项目 

vue init webpack  项目名称
# #用vue初始化一个带有webpack的项目，项目名是项目名称

npm install   
#安装依赖,在有package.json的文件夹下

npm  run dev
```
2. 项目中用到less
vue-cli生成的项目，没有less的安装包，但是内部包less配好了，安装less后就默认支持less了
```bash
npm install less less-loader axios vuex bootstrap 
```
3. 目录：
- pages --页面级组件
- components --  基础组件
- api -- 接口文件夹
----------------------

- mock -- 模拟数据，mock是模拟的意思，后台代码，不能放在src下
后台服务

4. 图标 iconfont - 图标字体
5. flex 布局
```css
display:flex;    //flex-伸缩盒模型
flex-direction:row/colum;   //默认方向是row 横向的,里面每一项有垂直排列了
justify-content:center;    // 垂直居中
align-item:center;   //横向居中
flex:1;   //每份占1
```
6. 使用swiper插件
https://github.com/surmon-china/vue-awesome-swiper

```bash
npm install vue-awesome-swiper --save
```
7. axios拦截器
```javascript
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'    //设置默认的基本路径,增加默认的请求路径
axios.interceptors.response.use((res)=>{    //在这里统一拦截结果，把结果处理成res.data
    return res.data
})

//获取轮播图数据
export let getSliders = ()=>{
    return axios.get('./sliders');   //返回的是一个promise对象，可以then
};
//获取热门图书
export let getHot = ()=>{
    return axios.get('./hot');
}
```
8. lists列表页中都是对书的操作：添加、删除、修改，用RESTful风格比较合适（一种架构风格，写接口的风格-根据对动词post\delete\put等实现增删改成）

9.浏览器测试接口只能测get接口

10.axios 是基于promise开发的，axios也有all方法

```javascript
 let [sliders,books] = await getHomeAll();    
 //promise.all()返回的是一个数组，[]数组里每一项都是每个请求的返回值
 // 数组的解构，di名字可以随便起，按照位置，第一个对应结果里的第一个
```

11、路由元信息--页面级缓存

实现页面缓存用kekp-alive，但有很多路由页面，有的需要缓存，有的不用缓存，怎么实现分页面缓存
配路由的时候加上属性： meta:{keepAlive:true} ,{path:'/home',component:Home,meta:{keepAlive:true}},取的时候在this.$route.meta.keepAlive

```javascript
export default new Router({
  routes: [
    {path:'/',redirect:'/home'},   //路径是/ 重定向到'/home'  这个路径；    {path:'/home',component:Home}这样写只是调用home组件，但路径 和下面的tab都没有变化
    {path:'/home',component:Home,meta:{keepAlive:true}},   //取的时候在this.$route.meta.keepAlive
    {path:'/lists',component:Lists},
    {path:'/add',component:Add},
    {path:'/collect',component:Collect},
    {path:'/detail/:bookid',component:Detail,name:'detail'},    //路径参数，:bookid必须有，可以随机；
    // 当访问的路径是 /detail/1 会产生一个对象{bookid:1} 放在$route.params上
    {path:'*',redirect:'/home'}   //写在最后，如果是没找到的 也重定向到home路径，
  ]
})
```
缓存的是外层的组件，通过app.vue里的router-view
```html
<template>
  <div id="app">

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

     <router-view v-if="!$route.meta.keepAlive"></router-view>
     <!-- 有两个router-view  一个放的需要缓存的，一个放的不需要缓存的 -->
    
  </div>
</template>
```

12、路由动画
```html
<template>
  <div id="app">
    <transition name='fadeIn'>
      <!-- keep-alive 缓存的是里面紧挨着一级的组件，所有transition标签要写在外面 -->
      <!-- 需要缓存的走这里 -->
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
    </transition>
    
    <transition name='fadeIn'>
      <!-- 不需要缓存的走这里 -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
     
     <!-- 有两个router-view  一个放的需要缓存的，一个放的不需要缓存的 -->
    <tab></tab>
  </div>
</template>

<style>
/* 路由动画 */
.fadeIn-enter{
  opacity:0;
}
.fadeIn-enter-active{
  transition:all 0.3s linear;
}
.fadeIn-leave-active{
  transition:all 0.3s linear;
  opacity:0;
}
</style>
```
13、上滑 --加载更多

默认每次请求加5条
前端告诉后台现在要从第几条开始给数据
/page?offset=10   就是从10开始给5个
后台返回的数据里还有告诉前台是否还有更多的数据 hasMore:true;

```javascript
 //加载更多
async getMoreData(){
    // 有数据并且 不是正在加载 的时候去取数据
    if(this.hasMore && !this.loading){    //有更多数据的时候获取数据 
        this.loading = true;  //进到这里变成了正在加载了
        let {hasMore,books} =  await getMore(this.offset);
        this.lists  = [... this.lists,...books];    //列表里是之前的书 +  获取到的5条
        this.hasMore = hasMore;
        this.loading = false;   //加载完了，没有正在加载
        // this.offset += 5;   //获取数据后更改offset--开始取数据的条数
        this.offset = this.lists.length;   //维护偏移量就是总书的长度
    }
},
```
14、 列表页 滑到页尾自动加载--scroll事件，给有overflow:auto; 那一项加scroll事件
dom 加载完成后mounted里加事件

```html
 <!-- 在dom上添加属性ref,然后通过$refs.scroll 获取这个dom元素，  scroll事件 -->
<div class="content" ref='scroll' @scroll="scrollMore">
    <!-- ... -->
</div>
```

```javascript
scrollMore(){ 
    //触发scroll事件，可能触发n次，先进来开一个定时器，下次触发的时候将上一次的定时器清除调
    // 防抖节流
    clearTimeout(this.timer); //进后先清掉上次的定时器，然后开一个新的定时器
    
    this.timer = setTimeout(()=>{   //this.timer挂在了当前组件实例上了

        // scrollTop 卷去的高度 + 元素.clientHeight 当前的可见区域的高度  +20 ==  元素的scrollHeight  元素总高;
        let {scrollTop,clientHeight,scrollHeight} = this.$refs.scroll
        if(scrollTop + clientHeight +20 > scrollHeight){
            this.getMoreData();   //获取更多
        }
    },25)
},
```
15、下拉刷新

先看lists 页面，也可以git上搜 pull - refresh
vue-pull-to-refresh


16、 图片懒加载--监听每个图片的onload,git上搜 vue-lazyload

https://github.com/hilongjw/vue-lazyload

```bash
#安装
$ npm i vue-lazyload -S
```

```javascript
import VueLazyload from 'vue-lazyload'

// 使用插件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
```
```html
 <!-- <img :src="item.img" alt=""> -->
  <!-- :src 换成 v-lazy ,会先显示个假的，等加载到真实图片，会替换成真图片 -->
   <img v-lazy="item.img" alt="">
```

17、路由懒加载 --代码分割coding split
如果把所有的文件打包成一个，会很大；而且如果项目很复杂也没法管理，所以需要优化

vue优化--- 我们用到了代码分割 -- coding split：我们希望点一个页面就只加载当前页面的数据

{path:'/add',component:()=>import('../pages/Add.vue')}  组件不再是引入的组件，而是一个函数，当页面路径和path对应时，会执行这个函数，这个函数去动态的载入组件

```javascript
/* 这样引用会把组件都打包到一个js里面，

import Home from '../pages/Home.vue'
import Lists from '../pages/Lists.vue'
import Add from '../pages/Add.vue'
import Collect from '../pages/Collect.vue'
import Detail from '../pages/Detail.vue' 
*/

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},   //路径是/ 重定向到'/home'  这个路径；    {path:'/home',component:Home}这样写只是调用home组件，但路径 和下面的tab都没有变化
    {path:'/home',component:Home,meta:{keepAlive:true}},   //取的时候在this.$route.meta.keepAlive
    {path:'/lists',component:()=>import('../pages/Lists.vue')},
    {path:'/add',component:()=>import('../pages/Add.vue')},   //2.------路由懒加载：--- component:()=>{return import('../pages/Add.vue')}的缩写
    //-----------1. 组件不再是引入的组件，而是一个函数，当页面路径和path对应时，会执行这个函数，这个函数去动态的载入组件
    {path:'/collect',component:()=>import('../pages/Collect.vue')},
    {path:'/detail/:bookid',component:Detail,name:'detail'},    //路径参数，:bookid必须有，可以随机；
    // 当访问的路径是 /detail/1 会产生一个对象{bookid:1} 放在$route.params上
    {path:'*',redirect:'/home'}   //写在最后，如果是没找到的 也重定向到home路径，
  ]
})
```

18、项目上线（发布项目）
package.json： npm run build
打包后直接运行不可以，需要放在http服务上，通过index.html打开
本地文件不支持/css/...这种路径，要在服务上，上线的时dist文件夹
还有我们写的后台server.js，以及我们要通过服务把html 跑起来

服务分为动态的 和 静态的；我们写到逻辑都是动态的，要体统一个静态服务把页面跑起来；

<!-- 1. 写一个静态服务，把dist 文件夹跑起来 -->
