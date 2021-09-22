import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { history } from '../redux';
import { like } from '../redux/reducers/analogueTwitter';

const Post = ({name, content, likes, id, authorId}) => {
  const dispatch = useDispatch()
  const { user } = useSelector(s => s.analogueTwitter)

  const pathLikedSvg = "../assets/svg/activeLike.svg";
  const pathNotLikedSvg = "../assets/svg/notActiveLike.svg";

  const liked = likes.indexOf(user.id) !== -1 ? true : false
  return (
    <div className="post">
      <button onClick={() => history.push(`./${user.id}/profile/${authorId}`)}>
        <h1>{name}</h1>
      </button>
      <p>{content}</p>
      <button onClick={() => dispatch(like(id, likes, liked, user.id, user.postsLiked))}>
        <img src={liked ? pathLikedSvg : pathNotLikedSvg} width="20px" alt="likes icon" />
        <span>{likes.length}</span>
      </button>
    </div>
  )
}

export default Post