import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './navigation.js';
import Posts from './posts.js';
import Profile from './profile.js';
import Top from './top.js';

const Glass = () => {
  return (
      <div className="glass">
        <Navigation />
        <Switch>
          <Route exact path="/:id">
            <Posts />
            <Top />
          </Route>
          <Route exact path="/:id/profile" component={Profile} />
        </Switch>
      </div>
  )
}

export default Glass;