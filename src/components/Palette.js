import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.scss';

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map(({ color, name }) => (
      <ColorBox background={color} name={name} />
    ));
    return (
      <div className="palette">
        <div className="colors">{colorBoxes}</div>
      </div>
    );
  }
}
