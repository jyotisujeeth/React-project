import React,{ useState } from 'react';

import './App.css';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';

function App() {
  const [showParagraph,setShowParagraph] =  useState(false);

  console.log('App initialized');

  const toggleParagraphHandler =() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput shoe={showParagraph}/>
     {/* {showParagraph && <p>This is new!</p>} */}
     <button onClick={ toggleParagraphHandler }>Toggle Paragraph!</button>
    </div>
  );
}

export default App;
