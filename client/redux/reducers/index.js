import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import posts from './posts'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    posts
  })

export default createRootReducer
