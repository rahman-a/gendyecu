import service from './service'

const productsAPI = {
  index(query) {
    const queryObject = {}
    for (let key in query) {
      if (query[key]) {
        queryObject[key] = query[key]
      }
    }
    const queryString = new URLSearchParams(queryObject).toString()
    return service().get(`products?${queryString}`)
  },
  getOne(id) {
    return service().get(`products/${id}`)
  },
  create(data) {
    return service().post('products/new', data)
  },
  update(id, data) {
    return service().patch(`products/${id}`, data)
  },
  updateImage(id, data) {
    return service().patch(`products/image/${id}`, data)
  },
  deleteImage(id, imageId) {
    return service().patch(`products/image/${id}/${imageId}`)
  },
  delete(id) {
    return service().delete(`products/${id}`)
  },
  orders(query) {
    const queryString = new URLSearchParams(query).toString()
    return service().get(`orders/all?${queryString}`)
  },
  newOrder(data) {
    return service().post('orders/new', data)
  },
  getOrder(id) {
    return service().get(`orders/${id}`)
  },
  toggleListing(id) {
    return service().patch(`products/${id}/listing`)
  },
  deleteLink(id, link) {
    return service().delete(`products/${id}/link/${link}`)
  },
}

export default productsAPI
