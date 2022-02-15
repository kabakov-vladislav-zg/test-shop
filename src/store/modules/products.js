import shop from '../../api/shop'

export const products = {
  state: {
    list: []
  },
  mutations: {
    setProducts (state, products) {
      state.list = products
    },
  },
  actions: {
    getProducts({ commit }, { filter, throttle }) {
      shop.getProducts(products => {
        commit('setProducts', products)
      }, filter, throttle)
    }
  },
  getters: {

  },

  namespaced: true
}