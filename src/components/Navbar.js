import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactIcon from '../assets/logo-react.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className='bg-react-navbar text-white'>
      <div id='navbar-container' className='flex justify-between items-center py-5 px-10'>
        <div id='leftSide-container' className='font-bold flex justify-center items-center'>
          <h2 className='mr-1 text-2xl align-middle'>React</h2>
          <img src={reactIcon} alt='reactJs-icon' className='w-6 h-6' />
        </div>
        <div id='rightSide-container'>
          <FontAwesomeIcon icon={faBars} size='lg' style={{ color: '#ffffff,' }} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
