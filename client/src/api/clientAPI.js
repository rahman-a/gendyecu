import { service } from './service'

export const clientApi = {
  register: (data) => {
    return service().post('users/new', data)
  },
  login: (data) => {
    return service().post('users/login', data)
  },
  logout: () => {
    return service().post('users/logout')
  },
  update: (data) => {
    return service().patch('users/', data)
  },
  updatePass: (data) => {
    return service().patch('users/credential', data)
  },
  verifyEmail: (data) => {
    return service().patch('users/verify-auth-link', data)
  },
  resetPass: (data) => {
    return service().patch('users/verify-auth-link', data)
  },
  sendResetLink: (data) => {
    return service().post('users/reset-password-link', data)
  },
  googleSignIn: (token) => {
    return service().post('users/login/google', token)
  },
  facebookSignIn: (token) => {
    return service().post('users/login/facebook', token)
  },
  links() {
    return service().get('users/links')
  },
  search(keyword) {
    return service().get(`users/search?keyword=${keyword}`)
  },
  sliders() {
    return service().get('sliders')
  },
  paypalClientId() {
    return service().get('purchase/clientId')
  },
  createOrder(type, data) {
    return service().post(`purchase/order/${type}`, data)
  },
}
