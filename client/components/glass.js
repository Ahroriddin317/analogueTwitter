import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useParams } from 'react-router-dom';
import { getUser } from '../redux/reducers/analogueTwitter.js';
import Navigation from './navigation.js';
import Posts from './posts.js';
import Profile from './profile.js';
import Top from './top.js';

const Glass = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
  }, [])
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