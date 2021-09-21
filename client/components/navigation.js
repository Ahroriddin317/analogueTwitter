import React from 'react';
import { useSelector } from 'react-redux';
import { history } from '../redux';

const Navigation = () => {
  const { user } = useSelector(s => s.analogueTwitter)
  return (
    <nav className="nav">
      <ul>
        <li>
          <button className="nav_button" onClick={() => history.push(`/${user.id}`)}>
            <img src="../assets/svg/list.svg" alt="posts" width="30px" height="30px" />
          </button>
          posts
        </li>
        <li>
          <button className="nav_button" onClick={() => history.push(`/${user.id}/profile`)}>
            <img src="../assets/svg/user.svg" alt="posts" width="30px" height="30px" />
          </button>
          profile
        </li>
      </ul>
    </nav>
  )
}

export default Navigation