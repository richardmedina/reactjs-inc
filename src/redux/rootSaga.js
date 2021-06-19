import { all, call } from "@redux-saga/core/effects";

import userSagas from './user/user.sagas'

export default function* rootSagas(){
  yield all([
    call(userSagas)
  ])
}