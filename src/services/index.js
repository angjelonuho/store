/**
 * Mocking client-server processing
 */
import _products from './products'

const TIMEOUT = 100

export const api = {
  getProducts() {
    return new Promise(resolve => {
      setTimeout(() => resolve(_products), TIMEOUT)
    })
  },

  buyProducts(cart) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
         resolve(cart)
      
      }, TIMEOUT),
    )
  },
}
