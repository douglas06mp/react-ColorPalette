import React, { Component } from 'react';
import './ColorBox.scss';

export default class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div className="color-box" style={{ background }}>
        <div className="copy-container">
          <div className="content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="more">More</span>
      </div>
    );
  }
}
