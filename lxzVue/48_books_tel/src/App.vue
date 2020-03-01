<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
     <router-view v-if="!$route.meta.keepAlive"></router-view>
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
</style>
