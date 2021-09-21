import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector(s => s.analogueTwitter);
  const { firstName, lastName, myPosts, postsLiked } = user
  
  return(
    <div className="profile">
      <div>
        <img src="../assets/svg/user.svg" width="20px" height="20px" alt="profile img" />
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