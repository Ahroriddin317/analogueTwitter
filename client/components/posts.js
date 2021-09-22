import React from 'react';
import { useSelector } from 'react-redux';
import AddPost from './addPost';
import Post from './post';

const Posts = () => {
  const posts = useSelector(s => s.analogueTwitter.posts).sort((a, b) => b.created - a.created)
  return (
    <div className="posts">
      <div>
        <AddPost />
        {posts.map(({ id, content, likes, author, liked }) => {
          return (
            <Post
              key={id}
              name={author.name}
              content={content}
              likes={likes}
              liked={liked}
              id={id}
              authorId={author.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Posts;