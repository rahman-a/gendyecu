import constants from '../constants'

const registerReducer = (state, action) => {
  switch (action.type) {
    case constants.client.REGISTER_REQUEST:
      return { loading: true, error: null }
    case constants.client.REGISTER_SUCCESS:
      return { loading: false, error: null, message: action.payload }
    case constants.client.REGISTER_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.REGISTER_RESET:
      return { loading: false, error: null, message: null }
    default:
      return { ...state }
  }
}

const loginReducer = (state, action) => {
  switch (action.type) {
    case constants.client.LOGIN_REQUEST:
      return { loading: true, error: null }
    case constants.client.LOGIN_SUCCESS:
      return {
        loading: false,
        error: null,
        info: action.payload.info,
        isAuth: action.payload.isAuth,
      }
    case constants.client.LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.LOGIN_CLEAR:
      return { loading: false, error: null, info: null, isAuth: false }
    default:
      return { ...state }
  }
}

const logoutReducer = (state, action) => {
  switch (action.type) {
    case constants.client.LOGOUT_REQUEST:
      return { loading: true, error: null }
    case constants.client.LOGOUT_SUCCESS:
      return { loading: false, error: null, success: action.payload }
    case constants.client.LOGOUT_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.LOGOUT_RESET:
      return { loading: false, error: null, success: false }
    default:
      return { ...state }
  }
}

const updateReducer = (state, action) => {
  switch (action.type) {
    case constants.client.UPDATE_REQUEST:
      return { loading: true, error: null }
    case constants.client.UPDATE_SUCCESS:
      return { loading: false, error: null, message: action.payload }
    case constants.client.UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.UPDATE_RESET:
      return { loading: false, error: null, message: null }
    default:
      return { ...state }
  }
}

const updatePassReducer = (state, action) => {
  switch (action.type) {
    case constants.client.UPDATE_PASSWORD_REQUEST:
      return { loading: true, error: null }
    case constants.client.UPDATE_PASSWORD_SUCCESS:
      return { loading: false, error: null, message: action.payload }
    case constants.client.UPDATE_PASSWORD_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.UPDATE_PASSWORD_RESET:
      return { loading: false, error: null, message: null }
    default:
      return { ...state }
  }
}

const verifyEmailReducer = (state, action) => {
  switch (action.type) {
    case constants.client.VERIFY_EMAIL_REQUEST:
      return { loading: true, error: null }
    case constants.client.VERIFY_EMAIL_SUCCESS:
      return { loading: false, error: null, success: action.payload }
    case constants.client.VERIFY_EMAIL_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.VERIFY_EMAIL_RESET:
      return { loading: false, error: null, success: null }
    default:
      return { ...state }
  }
}

const resetPasswordReducer = (state, action) => {
  switch (action.type) {
    case constants.client.RESET_PASSWORD_REQUEST:
      return { loading: true, error: null }
    case constants.client.RESET_PASSWORD_SUCCESS:
      return { loading: false, error: null, success: action.payload }
    case constants.client.RESET_PASSWORD_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.RESET_PASSWORD_RESET:
      return { loading: false, error: null, success: null }
    default:
      return { ...state }
  }
}

const resetPasswordLinkReducer = (state, action) => {
  switch (action.type) {
    case constants.client.RESET_PASSWORD_LINK_REQUEST:
      return { loading: true, error: null }
    case constants.client.RESET_PASSWORD_LINK_SUCCESS:
      return { loading: false, error: null, message: action.payload }
    case constants.client.RESET_PASSWORD_LINK_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.RESET_PASSWORD_LINK_RESET:
      return { loading: false, error: null, success: null }
    default:
      return { ...state }
  }
}

const googleSignInReducer = (state, action) => {
  switch (action.type) {
    case constants.client.GOOGLE_SIGN_IN_REQUEST:
      return { loading: true, error: null }
    case constants.client.GOOGLE_SIGN_IN_SUCCESS:
      return { loading: false, error: null, success: action.payload }
    case constants.client.GOOGLE_SIGN_IN_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.GOOGLE_SIGN_IN_RESET:
      return { loading: false, error: null, success: null }
    default:
      return { ...state }
  }
}

const facebookSignInReducer = (state, action) => {
  switch (action.type) {
    case constants.client.FACEBOOK_SIGN_IN_REQUEST:
      return { loading: true, error: null }
    case constants.client.FACEBOOK_SIGN_IN_SUCCESS:
      return { loading: false, error: null, success: action.payload }
    case constants.client.FACEBOOK_SIGN_IN_FAIL:
      return { loading: false, error: action.payload }
    default:
      return { ...state }
  }
}

const downloadsLinks = (state, action) => {
  switch (action.type) {
    case constants.client.DOWNLOAD_LINKS_REQUEST:
      return { loading: true, error: null }
    case constants.client.DOWNLOAD_LINKS_SUCCESS:
      return { loading: false, error: null, links: action.payload }
    case constants.client.DOWNLOAD_LINKS_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.DOWNLOAD_LINKS_RESET:
      return { loading: false, error: null, links: null }
    default:
      return { ...state }
  }
}

const clientSearch = (state, action) => {
  switch (action.type) {
    case constants.client.USER_SEARCH_REQUEST:
      return { loading: true, error: null }
    case constants.client.USER_SEARCH_SUCCESS:
      return { loading: false, error: null, result: action.payload }
    case constants.client.USER_SEARCH_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.USER_SEARCH_RESET:
      return { loading: false, error: null, result: null }
    default:
      return { ...state }
  }
}

const pageSliders = (state, action) => {
  switch (action.type) {
    case constants.client.PAGE_SLIDERS_REQUEST:
      return { loading: true, error: null }
    case constants.client.PAGE_SLIDERS_SUCCESS:
      return { loading: false, error: null, sliders: action.payload }
    case constants.client.PAGE_SLIDERS_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.PAGE_SLIDERS_RESET:
      return { loading: false, error: null, sliders: null }
    default:
      return { ...state }
  }
}

const getPaypalClientId = (state, action) => {
  switch (action.type) {
    case constants.client.GET_PAYPAL_CLIENT_ID_REQUEST:
      return { loading: true, error: null }
    case constants.client.GET_PAYPAL_CLIENT_ID_SUCCESS:
      return { loading: false, error: null, clientId: action.payload }
    case constants.client.GET_PAYPAL_CLIENT_ID_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.GET_PAYPAL_CLIENT_ID_RESET:
      return { loading: false, error: null, clientId: null }
    default:
      return { ...state }
  }
}

const purchasingAsset = (state, action) => {
  switch (action.type) {
    case constants.client.PURCHASING_ASSET_REQUEST:
      return { loading: true, error: null }
    case constants.client.PURCHASING_ASSET_SUCCESS:
      return { loading: false, error: null, order: action.payload }
    case constants.client.PURCHASING_ASSET_FAIL:
      return { loading: false, error: action.payload }
    case constants.client.PURCHASING_ASSET_RESET:
      return { loading: false, error: null, order: null }
    default:
      return { ...state }
  }
}

const clientReducers = {
  client: loginReducer,
  register: registerReducer,
  logout: logoutReducer,
  update: updateReducer,
  updatePass: updatePassReducer,
  verifyEmail: verifyEmailReducer,
  resetPass: resetPasswordReducer,
  resetLinkPass: resetPasswordLinkReducer,
  googleSignIn: googleSignInReducer,
  facebookSignIn: facebookSignInReducer,
  downloadsLinks,
  clientSearch,
  pageSliders,
  getPaypalClientId,
  purchasingAsset,
}

export default clientReducers
