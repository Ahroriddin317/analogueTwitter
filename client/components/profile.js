import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector(s => s.analogueTwitter);
  const { firstName, lastName, myPosts, postsLiked } = user

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

      <div>
        {myPosts}
        {postsLiked}
      </div>
    </div>
  )
}

export default Profile