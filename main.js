import Vue from 'vue'
import App from './App'
import { myRequest, baseUrl, loginByWeixin, getWeixinCode } from './util/api.js'
import uitls from './common/js/common.js'
import store from './store'

// 将封装的请求接口的方法挂载到全局
Vue.prototype.$myRequest = myRequest

// 问资源获取url
Vue.prototype.$baseUrl = baseUrl
Vue.prototype.$login = loginByWeixin
Vue.prototype.$WXCode = getWeixinCode
Vue.prototype.$uitls = uitls
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
