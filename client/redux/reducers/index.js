import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import analogueTwitter from './analogueTwitter'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    analogueTwitter
  })

export default createRootReducer
