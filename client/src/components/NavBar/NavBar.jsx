import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faClipboardCheck,
  faCalendar,
  faBox,
  faChartSimple,
  faUser,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className='topCircle'></div>
      <div className='bottomCircle'></div>
      <div className='yellowSemiCircle'></div>
      <div className='blueSemiCircle'></div>

      <nav>
        <div className='logo'>
          <div className='circleLeft'></div>
          <div className='circleRight'></div>
          <div className='semiCircleLeft'></div>
          <div className='semiCircleRight'></div>
        </div>
        {/* <div className='homeSelected'></div> */}

        <ul>
          <li>
            <img className='logo' src='' alt='Logo' />
          </li>
        </ul>

        <ul className='menu'>
          <li>
            <a href='/'>
              <FontAwesomeIcon
                icon={faHouse}
                size='xl'
                style={{ color: '#ffffff' }}
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon
                icon={faClipboardCheck}
                size='xl'
                style={{ color: '#ffffff' }}
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon
                icon={faCalendar}
                size='xl'
                style={{ color: '#ffffff' }}
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon
                icon={faBox}
                size='xl'
                style={{ color: '#ffffff' }}
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon
                icon={faChartSimple}
                size='xl'
                style={{ color: '#ffffff' }}
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon
                icon={faUser}
                size='xl'
                style={{ color: '#ffffff' }}
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                size='xl'
                style={{ color: '#ffffff' }}
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
