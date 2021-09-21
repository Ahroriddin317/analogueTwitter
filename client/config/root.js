import React from 'react'
import { Switch, Route, StaticRouter, } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { history } from '../redux'

import App from '../components/App.js'
import Glass from '../components/glass'
import Profile from '../components/profile'
import { ConnectedRouter } from 'connected-react-router'

const RouterSelector = (props) =>
  typeof window !== 'undefined' ? <ConnectedRouter {...props} /> : <StaticRouter {...props} />

const RootComponent = (props) => {
  return (
    <Provider store={store}>
      <RouterSelector history={history} location={props.location} context={props.context}>
        <Route path="/:id" component={App}/>
      </RouterSelector>
    </Provider>
  )
}

export default RootComponent