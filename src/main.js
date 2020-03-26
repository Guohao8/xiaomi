import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
//import env from './env/env'

import App from './App.vue'


  //根绝前端的跨域方式做调整
  axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5e79db138b0af2667e527b2f/mall'
  // axios.defaults.baseURL = '/api'
  axios.defaults.timeout = '8000'

  /*根据环境变量获取不同的请求地址
  axios.defaults.baseURL = env.baseURL*/

  //接口错误拦截
  axios.interceptors.response.use(function(response){
    let res = response.data
    if(res.status === 0){
      return res.data
    }else if(res.status === 10){
      window.location.href = '/login'
    }else{
      alert(res.msg)
    }
  })

Vue.use(vueAxios,axios)
Vue.use(VueLazyLoad,{
  loading: '~assets/img/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
