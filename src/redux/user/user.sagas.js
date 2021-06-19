import {
  takeLatest,
  all,
  put,
  call
} from 'redux-saga/effects'

import UserTypes  from './user.types'
import {
  userLoginSuccess
} from './user.actions'

function* userLogin(action){
  console.log('Processing userLoginAction: ', action)
  yield put(userLoginSuccess('richard', 'Ricardo Medina', 'ricki9@gmail.com'))
}

function* onUserLogin(){
  yield takeLatest(UserTypes.LOGIN, userLogin)
}

export default function* userSagas(){
  yield all([
    call(onUserLogin)
  ])
}
