import { useState } from 'react';
import Navbar from './components/Navbar';

export const menuItems = [
  {
    title: 'Home',
    url: '#',
  },
  {
    title: 'Services',
    url: '#',
  },
  {
    title: 'Products',
    url: '#',
  },
  {
    title: 'Contact Us',
    url: '#',
  },
  // For mobile pop-out: replacing the button for the mobile side
  {
    title: 'Sign up',
    url: '#',
  },
];


function App() {

  return (
    <div id='container'>
      <header>
        <Navbar />
      </header>
    </div>
  );
}

export default App;

