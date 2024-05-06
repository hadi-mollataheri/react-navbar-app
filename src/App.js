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
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div id='container'>
      <header>
        <Navbar 
          isClicked={isClicked} 
          setIsClicked={setIsClicked} 
        />
      </header>
    </div>
  );
}

export default App;

