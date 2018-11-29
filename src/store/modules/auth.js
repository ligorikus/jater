import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'

import apiCall from '../../utils/api'

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

};

const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations
}

