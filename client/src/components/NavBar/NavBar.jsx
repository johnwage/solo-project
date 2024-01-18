import React from 'react';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <nav>
        <ul>
          <li>
            <img className='logo' src='' alt='Logo' />
          </li>
        </ul>

        <ul className='menu'>
          <li>
            <a className='homeSelected' href='/'>
              Home
            </a>
          </li>
          <li>
            <a href='/'>Board</a>
          </li>
          <li>
            <a href='/'>Calendar</a>
          </li>
          <li>
            <a href='/'>Grid</a>
          </li>
          <li>
            <a href='/'>Graph</a>
          </li>
          <li>
            <a href='/'>People</a>
          </li>
          <li>
            <a href='/'>Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
