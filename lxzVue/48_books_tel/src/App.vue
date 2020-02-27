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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input,button{
  -webkit-appearance:none;
}
</style>
