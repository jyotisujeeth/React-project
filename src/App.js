import React,{ useState, useCallback } from 'react';
import Button from './components/UI/Button/Button'; 
import './App.css';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

function App() {
  const [showParagraph,setShowParagraph] =  useState(false);
const [AllowToggle, setAllowToggle] = useState(false);
  console.log('App initialized');

  const toggleParagraphHandler =useCallback(() => {
    if (AllowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={AllowToggleHandeler}>Allow Toggling</Button>
      {/* {showParagraph && <p>This is new!</p>} */}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
