import db from '../assets/mockup/products'

function throttle(func, ms) {
  let isThrottled
  let savedArgs
  let timer

  function wrapper(...arg) {

    if (isThrottled) {
      clearTimeout(timer)
    }

    savedArgs = arg
    isThrottled = true

    timer = setTimeout(() => {
      isThrottled = false
      func.apply(this, savedArgs)
      savedArgs = timer = null
    }, ms)
  }

  return wrapper;
}

class Class {
  constructor() {
    this._tGetProducts = throttle(this._getProducts, 500)
  }

  getProducts(commit, filter, throttle) {
    if(throttle) {
      this._tGetProducts(commit, filter)
    } else {
      this._getProducts(commit, filter)
    }
  }

  _getProducts(commit, filter) {
    let products
    if(filter) {
      const regexp = new RegExp(filter, 'i')
      products = db.filter(product => !!product.title.match(regexp))
    } else {
      products = db
    }
    commit(products)
  }
}

export default new Class