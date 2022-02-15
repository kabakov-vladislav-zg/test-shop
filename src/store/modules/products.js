import shop from '../../api/shop'
import throttle from "../../utils/throttle";

const state = {
  list: [],
  filter: '',
  current: {}
}
const mutations = {
  setProducts(state, products) {
    state.list = products
  },
  setFilter(state, filter) {
    state.filter = filter
  },
  setProduct(state, product) {
    state.current = product
  },
}

const actions = {
  async getProducts({ commit, state }, filter = '') {
    if (state.list.length && state.filter === filter) return

    let products = await shop.getProducts(filter)
    commit('setFilter', filter)
    commit('setProducts', products)
  },

  async getProduct({ commit, state }, slug) {
    if (state.current.slug === slug) return
    commit('setProduct', {})

    let product = state.list.find(product => product.slug === slug)
    if (!product) {
      product = await shop.getProduct(slug)
    }
    commit('setProduct', product)
  }
}
actions.throttledGetProducts = throttle(actions.getProducts, 500)

export const products = {
  state,
  mutations,
  actions,
  namespaced: true
}