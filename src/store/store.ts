import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const store = createStore(
  combineReducers(reducer),
  applyMiddleware(thunk)
)

export default store