import { runStrategy } from '../../helpers/strategy'
import UserTypes from './user.types'

/**
 * Strategies for user actions
 */
const strategies = {
  [UserTypes.LOGIN]: login,
  [UserTypes.LOGIN_SUCCESS]: loginSuccess,
  [UserTypes.LOGIN_FAILURE]: loginFailure,
}

/**
 * Default state for user
 */
const defaultState = {
  users: {}
}


/**
 * 
 * @param {*} state State
 * @param {*} action Redux
 * @returns new reduced state
 */
const userReducer = (state = defaultState, action) => runStrategy(strategies, state, action)


function login (state, payload) {
  return state
}

function loginSuccess (state, payload) {
  return state
}

function loginFailure(state, payload) {
  return state
}


export default userReducer

