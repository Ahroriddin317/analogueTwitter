import React from 'react';
import Navigation from './navigation.js';
import Posts from './posts.js';
import Top from './top.js';

const Glass = () => {
  return (
    <div className="glass">
      <Navigation />
      <Posts />
      <Top />
    </div>
  )
}

export default Glass;