import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <button className="nav_button">
            <img src="../assets/svg/list.svg" alt="posts" width="30px" height="30px" />
          </button>
          posts
        </li>
        <li>
          <button className="nav_button">
            <img src="../assets/svg/addPost.svg" alt="posts" width="30px" height="30px" />
          </button>
          add post
        </li>
      </ul>
    </nav>
  )
}

export default Navigation