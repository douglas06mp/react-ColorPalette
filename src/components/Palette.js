import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.scss';

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
  }

  changeLevel = level => {
    this.setState({ level });
  };

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(({ hex, name }) => (
      <ColorBox background={hex} name={name} />
    ));

    return (
      <div className="palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="colors">{colorBoxes}</div>
      </div>
    );
  }
}
