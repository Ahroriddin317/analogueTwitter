import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/reducers/analogueTwitter';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(s => s.analogueTwitter);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div>
      {posts.map(({ id, content, likes, created }) => {
        return (
          <div key={id}>
            <h1>{id}</h1>
            <h2>{content}</h2>
            <h4>{likes}</h4>
            <h6>{created}</h6>
          </div>
        )
      })}
      gg
    </div>
  )
}

export default Posts;