import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactIcon from '../assets/logo-react.svg';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className='bg-react-navbar text-white'>
      <div id='navbar-container'>
        <div id='leftSide-container' className='font-bold text-lg'>
          <h2>React</h2>
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
