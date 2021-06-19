import UserTypes from './user.types'


export const userLogin = (userName, password) => ({
  type: UserTypes.LOGIN,
  payload: {
    userName,
    password,
    loading: false,
    error: null
  }
})

export const userLoginSuccess = (userName, displayName, email) => ({
  type: UserTypes.LOGIN_SUCCESS,
  payload: {
    loading: true,
    error: null,
    user: {
      userName,
      displayName,
      email,
    },
  }
})


export const userLoginFailure = error => ({
  type: UserTypes.LOGIN_FAILURE,
  payload: {
    loading: false,
    error
  }
})
