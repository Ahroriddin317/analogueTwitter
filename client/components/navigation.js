import React from 'react';
import { useSelector } from 'react-redux';
import { history } from '../redux';

const Navigation = () => {
  const { user } = useSelector(s => s.analogueTwitter)
  const pathname = useSelector(s => s.router.location.pathname).indexOf('profile')
  return (
    <nav className="nav">
      <ul>
        <li>
          <button className={`nav_button ${pathname === -1 ? 'active' : ''}`} onClick={() => history.push(`/${user.id}`)}>
            <img src="../assets/svg/list.svg" alt="posts" width="30px" height="30px" />
            posts
          </button>
        </li>
        <li>
          <button className={`nav_button ${pathname !== -1 ? 'active' : ''}`} onClick={() => history.push(`/${user.id}/profile`)}>
            <img src="../assets/svg/user.svg" alt="posts" width="30px" height="30px" />
            Profile
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation