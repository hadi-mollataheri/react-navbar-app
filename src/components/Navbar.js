import React, { useContext } from 'react';
import { NavbarContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactIcon from '../assets/logo-react.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from './Buttons';

function Navbar() {
  const { menuItems, isClicked, setIsClicked } = useContext(NavbarContext);

  const handleIconClick = () => {
    setIsClicked((prevBoolean) => !prevBoolean);
  };

  return (
    <nav className='bg-react-navbar text-white'>
      <div
        id='navbar-container'
        className='flex justify-between items-center py-5 px-10'
      >
        <div
          id='leftSide-container'
          className='font-bold flex justify-center items-center'
        >
          <h2 className='mr-1 text-2xl align-middle'>React</h2>
          <img src={reactIcon} alt='reactJs-icon' className='w-6 h-6' />
        </div>
        <div id='rightSide-container'>
          <div id='mobile-icons'>
            <button onClick={handleIconClick}>
              {isClicked ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  size='lg'
                  style={{ color: '#ffffff,' }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  size='lg'
                  style={{ color: '#ffffff,' }}
                />
              )}
            </button>
          </div>
        </div>
      </div>
      <ul className={` ${isClicked ? 'flex flex-col items-center justify-center bg-indigo-600' : 'hidden'}`}>
        {menuItems.map((item, index) => {
          return (
            <li key={index} className='my-3'>
              <a key={index} href={item.url}>{item.title}</a>
            </li>
          );
        })}
        <Button />
      </ul>
    </nav>
  );
}

export default Navbar;
