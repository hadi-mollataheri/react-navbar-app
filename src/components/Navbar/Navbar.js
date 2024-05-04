import React from 'react';
import { menuItems } from './MenuItems';
import reactLogo from '../../assets/logo-react.svg';

function Navbar() {
  return (
    <nav className='grid grid-cols-2 justify-center p-5 bg-react-navbar h- text-white text-lg'>
      <div
        id='leftSide-container'
        className=' justify-self-start ml-12 flex items-center'
      >
        <h3 aria-label='logo' className='text-xl font-bold'>
          React
        </h3>
        <img src={reactLogo} alt='react' className=' w-6 h-6 ml-1 fill-white' />
      </div>
      <ul className='justify-self-end mr-12 flex gap-5 items-center justify-center'>
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
