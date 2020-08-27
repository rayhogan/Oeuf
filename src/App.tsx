import React from 'react';
import logo from './logo.svg';
import egg from './images/egg.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-Title">Oeuf</div>
        <img src={egg} height="100"/>
      </header>
    </div>
  );
}

export default App;