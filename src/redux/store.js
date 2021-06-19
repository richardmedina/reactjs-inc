import {
  createStore,
  applyMiddleware
} from 'redux'

import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer' 
import rootSagas from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middleWares = [
  logger,
  sagaMiddleware
]

const store = createStore(rootReducer, applyMiddleware(...middleWares))
sagaMiddleware.run(rootSagas);

export default store
