import React from 'react'
import { useSelector } from 'react-redux';
import Glass from './glass.js';

function App() {
  const {posts} = useSelector(s => s)
  console.log(posts)
  return (
    <main className="main">
      <Glass/>
    </main>
  );
}

export default App;
