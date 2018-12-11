import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import categories from './modules/categories'
import user from './modules/user'
import axios from 'axios'

Vue.prototype.$http = axios;
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const token = localStorage.getItem('user-token');
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export default new Vuex.Store({
  modules: {
    auth,
    categories,
    user
  },
  strict: debug
});
