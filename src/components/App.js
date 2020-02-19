import React from 'react';
import Palette from './Palette';
import originPalettes from './originPalettes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Palette {...originPalettes[4]} />
    </div>
  );
}

export default App;
