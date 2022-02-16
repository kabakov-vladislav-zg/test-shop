import Vue from 'vue'
import Vuex from 'vuex'
import { products } from './modules/products'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: debug,

  modules: {
    products
  }
})
