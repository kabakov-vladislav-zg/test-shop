import shop from '../../api/shop'
import throttle from "../../utils/throttle"

const state = {
  list: [],
  filter: '',
  current: {}
}
const mutations = {
  setListProducts(state, value) {
    state.list = value
  },
  setCurrentFilter(state, value) {
    state.filter = value
  },
  setCurrentProduct(state, value) {
    state.current = value
  },
}

const actions = {
  async getListProducts({ commit, state }, filter = '') {
    if (state.list.length && state.filter === filter) return

    let products = await shop.getProducts(filter)
    commit('setCurrentFilter', filter)
    commit('setListProducts', products)
  },

  async getCurrentProduct({ commit, state }, slug) {
    if (state.current.slug === slug) return

    let product = state.list.find(product => product.slug === slug) || await shop.getProduct(slug)
    commit('setCurrentProduct', product || {})
  }
}
actions.throttledGetListProducts = throttle(actions.getListProducts, 500) // to prevent multiple requests

export const products = {
  state,
  mutations,
  actions,
  namespaced: true
}