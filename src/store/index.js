import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import loading from './modules/loading'
import menu from './modules/menu'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    modules: {
        loading,
        menu
    }
})
