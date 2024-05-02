import React from 'react';
import MenuItems from './MenuItems';
import reactLogo from '../../assets/logo-react-svgrepo-com.svg'

function Navbar() {
  return (
    <nav className='grid grid-cols-2 justify-center p-5 bg-indigo-700 text-white'>

      <div id='leftSide-container' className=' justify-self-start ml-12 flex items-center'>
        <h3 aria-label='logo' className='text-xl font-bold'>
          React
        </h3>
        <img src={reactLogo} alt='react' className=' w-6 h-6 ml-1 fill-white' />
      </div>

      <MenuItems />
    </nav>
  );
}

export default Navbar;
