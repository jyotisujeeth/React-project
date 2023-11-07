import React,{ useState } from 'react';

import './App.css';

function App() {
  const [showParagraph,setshowParagraph] =  useState(false);4

  const toggleParagraphHandler =() => {

      const [showParagraph,setshowParagraph] =  useState(false);4
(((prevShowParagraph) => !prevShowParagraph)
    );
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
     {showParagraph && <p>This is new!</p>}
     <button onClick={ toggleParagraphHandler }>Toggle Paragraph!</button>
    </div>
  );
}

export default App;
