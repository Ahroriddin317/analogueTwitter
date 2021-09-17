import React from 'react'
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../redux'

import App from '../components/App.js'

const RootComponent = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/:id" component={App} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default RootComponent