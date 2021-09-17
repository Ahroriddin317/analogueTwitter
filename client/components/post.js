import React from 'react';

const Post = ({name, content, likes, liked}) => {
  const pathLikedSvg = "../assets/svg/activeLike.svg";
  const pathNotLikedSvg = "../assets/svg/notActiveLike.svg";
  return (
    <div className="post">
      <h1>{name}</h1>
      <p>{content}</p>
      <button>
        <img src={liked ? pathLikedSvg : pathNotLikedSvg} width="20px" alt="likes icon" />
        <span>{likes}</span>
      </button>
    </div>
  )
}

export default Post