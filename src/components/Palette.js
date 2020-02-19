import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ColorBox from './ColorBox';
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
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        <div className="colors">{colorBoxes}</div>
      </div>
    );
  }
}
