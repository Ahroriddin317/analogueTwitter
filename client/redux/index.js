import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import rootReducer from './reducers'

export const history = createBrowserHistory({forceRefresh: false})

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose


const store = createStore(
  rootReducer(history),
  composeFunc(applyMiddleware(thunk, routerMiddleware(history)))
)
export default store

