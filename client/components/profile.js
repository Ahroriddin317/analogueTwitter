import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataProfile } from '../redux/reducers/analogueTwitter';
import Post from './post';

const Profile = () => {
  const dispatch = useDispatch();
  const [showPosts, setshowPosts] = useState(true);
  const { id } = useParams();

  const { profile, posts } = useSelector(s => s.analogueTwitter);
  const { firstName, lastName, myPosts, postsLiked } = profile;

  const getArray = (array) => {
    return posts.length !== 0 && typeof array !== 'undefined' ? array.reduce((initState, id) => {
      const post = posts.find(post => post.id === id)
      return [...initState, { ...post }]
    }, []) : [];
  }

  const userPosts = getArray(myPosts)
  const likedPosts = getArray(postsLiked)

  useEffect(() => {
    dispatch(getDataProfile(id))
  }, [])

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
        {(showPosts ? userPosts : likedPosts).map(({ id, content, likes, author }) => {
          return (
            <Post
              key={id}
              name={author.name}
              content={content}
              likes={likes}
              id={id}
            />
          )
        })}
        {userPosts.length === 0 && showPosts ? <h1>No posts</h1> : ''}
        {likedPosts.length === 0 && !showPosts ? <h1>No liked posts</h1> : ''}
      </div>
    </div>
  )
}

export default Profile