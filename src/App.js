import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div id='container'>
      <header>
        <Navbar isClicked={isClicked} setIsClicked={setIsClicked} />
      </header>
    </div>
  );
}

export default App;

