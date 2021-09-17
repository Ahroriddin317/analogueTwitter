import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../redux/reducers/analogueTwitter.js';
import Glass from './glass.js';

function App() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector(s => s.analogueTwitter);

  useEffect(() => {
    dispatch(getUser(id));
  }, [])
  return (
    <main className="main">
      {user.id ? <Glass /> : <h1>User is not found</h1>}
    </main>
  );
}

export default App;
