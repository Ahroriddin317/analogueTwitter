import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Post from './post';

const Profile = () => {
  const { user, posts } = useSelector(s => s.analogueTwitter);
  const [showPosts, setshowPosts] = useState(true)
  const { firstName, lastName, myPosts, postsLiked } = user;

  const userPosts = posts.length !== 0 ? myPosts.reduce((initState, id) => {
    const post = posts.find(post => post.id === id)
    return [...initState, { ...post }]
  }, []) : [];

  const likedPosts = posts.length !== 0 ? postsLiked.reduce((initState, id) => {
    const post = posts.find(post => post.id === id)
    return [...initState, { ...post }]
  }, []) : [];

  return (
    <div className="profile">
      <div className="profile_header">
        <img
          src="../assets/svg/user.svg" width="60px"
          height="60px"
          alt="profile img"
          className="profile_header_img"
        />
        <h1>{`${firstName} ${lastName}`}</h1>
      </div>

      <div className="profile_buttons">
        <button
        className={`profile_button ${showPosts ? 'active' : ''}`}
        onClick={() => setshowPosts(!showPosts)}
        >
          Posts
        </button>
        <button
        className={`profile_button ${!showPosts ? 'active' : ''}`}
        onClick={() => setshowPosts(!showPosts)}
        >
          Likes
        </button>
      </div>
      <div>
        {(showPosts ? userPosts : likedPosts).map(({ id, content, likes, author, liked }) => {
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
    </div>
  )
}

export default Profile