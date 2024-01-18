import React from 'react';

const NavBar = () => {
  return (
    <nav className='leftColumn'>
      <ul>
        <li>
          <img
            className='logo'
            src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png'
            alt='Logo'
          />
        </li>
      </ul>

      <div className='menu'>
        <ul className='topMenu'>
          <li>
            <a className='homeSelected' href='/'>
              Home
            </a>
          </li>
          <li>
            <a href='/'>Search</a>
          </li>
          <li>
            <a href='/'>Explore</a>
          </li>
          <li>
            <a href='/'>Reels</a>
          </li>
          <li>
            <a href='/'>Messages</a>
          </li>
          <li>
            <a href='/'>Notifications</a>
          </li>
          <li>
            <a href='/'>Create</a>
          </li>
          <li>
            <a href='/'>Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NarBar;
