import axios from 'axios'
import { CATEGORIES_ALL } from '../actions/categories'
import apiCall from '../../utils/api'
import {AUTH_ERROR} from "../actions/auth";

const state = {
  categories: [],
};

const getters = {

};

const actions = {
  [CATEGORIES_ALL]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      apiCall('categories', 'GET', {})
        .then(resp => {
          commit(CATEGORIES_ALL, resp);
          resolve(resp);
        })
        .catch(err => {
          commit(CATEGORIES_ALL, err);
          reject(err)
        })
    })
  }
};

const mutations = {
  [CATEGORIES_ALL]: (state, resp) => {
    state.categories = resp.categories
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
