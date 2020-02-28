<template>
  <div id="app">
   <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import tab from './components/tab.vue'
export default {
  name: 'App',
  components:{
    tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input,button{
  -webkit-appearance:none;
}

.content{
  /* background:red; */
  position:fixed;
  top:40px;
  bottom:80px;
}
</style>
