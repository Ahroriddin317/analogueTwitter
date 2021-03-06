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
          <Route exact path="/:userId">
            <Posts />
            <Top />
          </Route>
          <Route exact path="/:userId/profile/:id" component={Profile} />
        </Switch>
      </div>
  )
}

export default Glass;