import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
//element样式
import 'element-ui/lib/theme-chalk/index.css';
//基于断点的隐藏类
import 'element-ui/lib/theme-chalk/display.css';
import vuex from 'vuex'
// 引入路由组件
import vueRouter from 'vue-router'
// 引入路由器(自己配置的)
import router from './router/index'

Vue.use(ElementUI);
Vue.use(vuex)
Vue.use(vueRouter)

Vue.config.productionTip = false

new Vue({
  // 是残缺版vue的导入母版的写法
  /*
  * render(createElement){
  *   console.log(typeof createElement)
  *   return createElement('h1','你好，世界！');
  * }
  * */
  render: h => h(App),
  router:router
}).$mount('#app')
