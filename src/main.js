// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import swal from 'sweetalert'
import Cookies from './assets/js/cookie'
import _g from './assets/js/global'
import store from './vuex/store'
import moment from 'moment';
import filter from './assets/js/filter'
import {i18n, vueI18n} from './lang/lang'
import echarts from 'echarts'

import {cancelArr} from "./assets/js/baseApi"

import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/base.scss';
import './assets/css/global.scss';

Vue.prototype.$echarts = echarts;
Vue.prototype.$swal = swal;
Vue.prototype.$moment = moment

window.cookie = Cookies;
window._g = _g;
window.store = store;

Vue.use(ElementUI)

vueI18n(Vue)

router.beforeEach((to, from, next) => {
    while(cancelArr.length>0){
        cancelArr.shift().cancel();
    }
    
    next();
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    filter,
    i18n,
    template: '<router-view></router-view>'
})
