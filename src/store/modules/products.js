import {
  PRODUCTS_ALL,
  PRODUCTS_PRODUCT,
  PRODUCTS_STORE,
  PRODUCTS_UPDATE,
  PRODUCTS_DESTROY
} from '../actions/products'

import apiCall from '../../utils/api'

const state = {
  products: []
};

const getters = {

};

const actions = {
  [PRODUCTS_ALL]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      apiCall('/products', 'GET', {})
        .then(resp => {

        })
        .catch(err => {
          commit(PRODUCTS_ALL, err);
          reject(err);
        })
    })
  },
  [PRODUCTS_PRODUCT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {

    })
  },
  [PRODUCTS_STORE]: ({commit, dispatch}, product) => {
    return new Promise((resolve, reject) => {

    })
  },
};

const mutations = {
  [PRODUCTS_ALL]: (state, resp) => {
    state.products = resp.products
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
