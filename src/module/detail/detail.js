import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Layout from 'components/Layout/Layout'
import store from '@store'

Vue.use(VueAxios, axios)
Vue.component('Layout', Layout);


new Vue({
    store,
    el: '#app',
    template: '<App/>',
    components: { App }
})
