import { useState, createContext } from 'react';
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
];

export const NavbarContext = createContext();

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div id='container'>
      <NavbarContext.Provider value={{ menuItems, isClicked, setIsClicked }}>
        <header>
          <Navbar />
        </header>
      </NavbarContext.Provider>
    </div>
  );
}

export default App;

