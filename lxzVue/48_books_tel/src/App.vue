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

<script>
import tab from "./components/tab.vue";
export default {
  name: "App",
  components: {
    tab
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input,
button {
  -webkit-appearance: none;
}

.content {
  /* background:red; */
  position: fixed;
  top: 40px;
  bottom: 80px;
  overflow: auto;
  width: 100%;
}

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
