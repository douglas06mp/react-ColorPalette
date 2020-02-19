import React, { Component } from 'react';
import Palette from './Palette';
import originPalettes from '../helpers/originPalettes';
import { generatePalette } from '../helpers/colorHelpers';
import './App.css';

export default class App extends Component {
  render() {
    console.log(generatePalette(originPalettes[4]));

    return (
      <div className="App">
        <Palette {...originPalettes[4]} />
      </div>
    );
  }
}
