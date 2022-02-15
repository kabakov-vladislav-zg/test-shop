import shop from '../../api/shop'
import throttle from "../../utils/throttle";

const state = {
  list: []
}
const mutations = {
  setProducts (state, products) {
    state.list = products
  },
}

const actions = {
  async getProducts({ commit }, filter = '') {
    let products = await shop.getProducts(filter)
    commit('setProducts', products)
  }
}
actions.throttledGetProducts = throttle(actions.getProducts, 500)

export const products = {
  state,
  mutations,
  actions,
  namespaced: true
}