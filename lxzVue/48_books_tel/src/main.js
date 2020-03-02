// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

//使用懒加载插件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://goss.veer.com/creative/vcg/veer/800water/veer-312575931.jpg',
  loading: 'https://img.zcool.cn/community/01e5ac58e0caeaa801219c77d86d53.gif',
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
