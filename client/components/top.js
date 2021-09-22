import React from 'react';
import { useSelector } from 'react-redux';
import { history } from '../redux';

const Top = () => {
  const { user, posts } = useSelector(s => s.analogueTwitter);
  const topPosts = posts.sort((a, b) => b.likes - a.likes).slice(0, 5);
  return(
    <div className="top" >
      <h1>Popular posts</h1>
      {topPosts.map(({ id, content, likes, author}) => {
        return(
          <div key={id}>
            <button onClick={() => history.push(`./${user.id}/profile/${author.id}`)}>
              <h1>{author.name}</h1>
            </button>
            <p>{`${content.slice(0, 12)}...`}</p>
            <img src="../assets/svg/activeLike.svg" width="20px" alt="like icon" />
            <h6>{likes}</h6>
          </div>
        )
      })}
    </div>
  )
}

export default Top