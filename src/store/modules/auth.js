import axios from 'axios'
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
import apiCall from '../../utils/api'
import {USER_ME} from "../actions/user";
import Vue from "vue";

//apiCall('categories/2', 'post', {data: {'cat': 3}}).then(resp => console.log(resp));
const state = {
  token: localStorage.getItem('user-token') || '',
  status: '',
  hasLoadedOnce: false
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
};

const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST);
      apiCall('auth/signin', 'POST', {data: user})
        .then(resp => {
          localStorage.setItem('user-token', resp.access_token);
          commit(AUTH_SUCCESS, resp);
          resolve(resp)
        })
        .catch(err => {
          commit(AUTH_ERROR, err);
          localStorage.removeItem('user-token');
          reject(err)
        })
    })
  },
  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT);
      localStorage.removeItem('user-token');
      resolve()
    })
  }
};

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success';
    state.token = resp.access_token;
    state.hasLoadedOnce = true;
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + resp.access_token
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error';
    state.hasLoadedOnce = true
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = '';
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}

