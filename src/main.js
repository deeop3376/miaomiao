import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'

Vue.prototype.axios=axios;
Vue.config.productionTip = false
Vue.filter('setWH',(url,arg)=>{//全局过滤器
  return url.replace(/w\.h/,arg);
});
import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);  //全局组件
import Loading from '@/components/Loading'
Vue.component('Loading',Loading)
new Vue({

  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
