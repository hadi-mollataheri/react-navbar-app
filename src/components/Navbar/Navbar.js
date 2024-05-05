import React from 'react';
import { menuItems } from './MenuItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactIcon from '../../assets/logo-react.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar({ isClicked, setIsClicked }) {
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <nav
      className={
        isClicked === false
          ? 'flex justify-between items-center py-5 bg-react-navbar text-white text-lg'
          : 'justify-center pt-5 bg-react-navbar text-white text-lg'
      }
    >
      <div
        id='top-mobile-container'
        className={isClicked ?`flex justify-between items-center pb-5` : ''}
      >
        <div id='left-side-container' className='ml-12 flex items-center cursor-pointer'>
          <h3 aria-label='logo' className='text-xl font-bold '>
            React
          </h3>
          <img src={reactIcon} alt='react' className='w-6 h-6 ml-1' />
        </div>

        <div
          id='menu-icon'
          className='justify-self-end mr-12 cursor-pointer inline-block'
          onClick={handleClick}
        >
          {isClicked ? (
            <FontAwesomeIcon icon={faXmark} style={{ color: '#ffffff' }} />
          ) : (
            <FontAwesomeIcon icon={faBars} style={{ color: '#ffffff' }} />
          )}
        </div>
      </div>

      <ul
        className={
          isClicked === false
            ? 'justify-self-end mr-12 flex gap-5 items-center justify-center'
            : ' flex flex-col items-center justify-center gap-5 bg-indigo-600 w-full col-span-2 py-6 text-base'
        }
      >
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
