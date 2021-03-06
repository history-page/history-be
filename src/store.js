import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { initialStateCurrentUser } from './reducers/currentUser'
import currentUser from './reducers/currentUser'

import thunk from 'redux-thunk'

const reducers = combineReducers({
  currentUser
})

const middleware = [thunk]
const enhancers = []
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  reducers,
  {
    currentUser: initialStateCurrentUser
  },
  composedEnhancers
)

export default store
