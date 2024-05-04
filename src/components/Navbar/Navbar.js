import React from 'react';
import { menuItems } from './MenuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactIcon from '../../assets/logo-react.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar({ isClicked, setIsClicked }) {
  const handleClick = () => {};

  return (
    <nav className='grid grid-cols-2 justify-center p-5 bg-react-navbar h- text-white text-lg'>
      <div
        id='leftSide-container'
        className=' justify-self-start ml-12 flex items-center cursor-pointer'
      >
        <h3 aria-label='logo' className='text-xl font-bold'>
          React
        </h3>
        <img src={reactIcon} alt='react' className='w-6 h-6 ml-1' />
      </div>

      <div id='rightSide-container' className='justify-self-end mr-12'>
        <div id='menu-icon' className=' cursor-pointer' onClick={handleClick}>
          {isClicked ? (
            <FontAwesomeIcon icon={faXmark} style={{ color: '#ffffff' }} />
          ) : (
            <FontAwesomeIcon icon={faBars} style={{ color: '#ffffff' }} />
          )}
        </div>

        <ul
          className={
            !isClicked
              ? ' flex gap-5 items-center justify-center'
              : ''
          }
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
