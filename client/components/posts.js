import React from 'react';
import { useSelector } from 'react-redux';

const Posts = () => {
  const { posts } = useSelector(s => s.analogueTwitter);

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
    </div>
  )
}

export default Posts;