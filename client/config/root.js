import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux'

import App from '../components/App.js'

const RootComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default RootComponent