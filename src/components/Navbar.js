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
        className='flex justify-between items-center py-5 px-10 relative h-20'
      >
        <div
          id='logo-container'
          className='font-bold flex justify-center items-center'
        >
          <h2 className='mr-1 text-2xl align-middle'>React</h2>
          <img src={reactIcon} alt='reactJs-icon' className='w-6 h-6' />
        </div>

        <div id='mobile-icons' className='md:hidden'>
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

        <ul
          className={`absolute top-20 flex flex-col justify-center items-center transition-all ${
            isClicked
              ? 'bg-indigo-600 left-0 w-full'
              : 'w-full -left-full '
          } md:flex md:bg-inherit md:flex-row md:w-auto md:max-w-fit md:gap-8 md:static`}
        >
          {menuItems.map((item, index) => {
            return (
              <li key={index} className='my-3 md:my-0'>
                <a
                  key={index}
                  href={item.url}
                  className='hover:text-indigo-600 hover:bg-white rounded p-0.5 pb-1 align-middle hover:transition'
                >
                  {item.title}
                </a>
              </li>
            );
          })}
          <Button />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
