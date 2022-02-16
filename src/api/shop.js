import db from '../assets/mockup/products'

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)) // simulate api work
}

export default {
  async getProducts(filter = '') {
    let products
    if(filter) {
      const regexp = new RegExp(filter, 'i')
      products = db.filter(product => !!product.title.match(regexp))
    } else {
      products = db
    }

    await timeout(100)
    return products
  },

  async getProduct(slug) {
    await timeout(50)
    return db.find(product => product.slug === slug)
  }
}