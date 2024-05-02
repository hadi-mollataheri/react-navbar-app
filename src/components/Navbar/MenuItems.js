import React from 'react';
import Button from '../Buttons';

function MenuItems() {
  return (
    <div id='items-container' className='justify-self-end mr-12 flex items-center justify-center font-bold'>
      <a id='button-1' className='mx-3' href='#1'>Home</a>
      <a id='button-2' className='mx-3' href='#1'>Services</a>
      <a id='button-3' className='mx-3' href='#1'>Products</a>
      <a id='button-4' className='mx-3' href='#1'>Contact Us</a>
      <Button />
    </div>
  );
}

export default MenuItems;
