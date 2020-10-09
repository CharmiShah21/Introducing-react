import React, { useState } from 'react';
import Greeting from "./components/Greeting";
import './App.css';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <Greeting name={name} />
      {name && <marquee className="marquee" behavior="scroll" direction="left" scrollamount="25">👋 Hello {name}</marquee>}
      <input
        className="input"
        onChange={({ target: { value } }) => setName(value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default App;
