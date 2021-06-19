import {
  createStore,
  applyMiddleware
} from 'redux'

import rootReducer from './rootReducer' 

const middleWares = []

const store = createStore(rootReducer, applyMiddleware(...middleWares))

export default store
