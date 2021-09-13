import React from 'react'
import { Switch, Route, StaticRouter } from 'react-router-dom'

import App from '../components/App'

const RootComponent = () => {
  return (
    <StaticRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </StaticRouter>
  )
}

export default RootComponent