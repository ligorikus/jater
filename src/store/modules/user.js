import { USER_ME } from '../actions/user'
import apiCall from '../../utils/api'

const state = {
  user: Object
};

const getters = {
  getUser() {
    return state.user;
  }
};

const actions = {
  [USER_ME]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      apiCall('me', 'GET', {})
        .then(resp => {
          commit(USER_ME, resp);
          resolve(resp);
        })
        .catch(err => {
          commit(USER_ME, err);
          reject(err)
        })
    })
  }
};

const mutations = {
  [USER_ME]: (state, resp) => {
    state.user = resp
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
