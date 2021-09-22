import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/reducers/analogueTwitter';

const Startup = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
  }, [])

  return <>{props.children}</>
}

export default Startup