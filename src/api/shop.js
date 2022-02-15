import db from '../assets/mockup/products'

function timeout() {
  return new Promise(resolve => setTimeout(resolve, 100));
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

    await timeout()
    return products
  }
}