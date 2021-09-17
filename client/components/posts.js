import React from 'react';
import { useSelector } from 'react-redux';
import Post from './post';

const Posts = () => {
  const { posts } = useSelector(s => s.analogueTwitter);

  return (
    <div>
      {posts.map(({ id, content, likes, author, liked }) => {
        return (
          <Post key={id} name={`${author.name}`} content={content} likes={likes} liked={liked}  />
        )
      })}
    </div>
  )
}

export default Posts;