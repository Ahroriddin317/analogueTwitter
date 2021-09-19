import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/reducers/analogueTwitter';
import AddPost from './addPost';
import Post from './post';

const Posts = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector(s => s.analogueTwitter);

  useEffect(() => {
    dispatch(getPosts());
  },[posts])

  return (
    <div>
      <AddPost/>
      {posts.map(({ id, content, likes, author, liked }) => {
        return (
          <Post
            key={id}
            name={author.name}
            content={content}
            likes={likes}
            liked={liked}
            id={id}
            />
        )
      })}
    </div>
  )
}

export default Posts;