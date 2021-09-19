import React from 'react';
import { useSelector } from 'react-redux';

const AddPost = () => {
  const { user } = useSelector(s  => s.analogueTwitter)
  return (
    <div className="addPost" >
      <h1>{user.firstName}</h1>
      <textarea type="text" placeholder='Write...' />
      <button>
        post
      </button>
    </div>
  )
}

export default AddPost;