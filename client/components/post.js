import React from 'react';
import { useDispatch } from 'react-redux';
import { like } from '../redux/reducers/analogueTwitter';

const Post = ({name, content, likes, liked, id}) => {
  const pathLikedSvg = "../assets/svg/activeLike.svg";
  const pathNotLikedSvg = "../assets/svg/notActiveLike.svg";
  const dispatch = useDispatch()
  return (
    <div className="post">
      <h1>{name}</h1>
      <p>{content}</p>
      <button onClick={() => dispatch(like(id, likes, liked))}>
        <img src={liked ? pathLikedSvg : pathNotLikedSvg} width="20px" alt="likes icon" />
        <span>{likes}</span>
      </button>
    </div>
  )
}

export default Post