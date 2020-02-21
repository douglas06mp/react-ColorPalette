import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import './ColorBox.scss';

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
  }

  changeCopyState = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  };

  render() {
    const { name, background, colorUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.1;
    const isLightColor = chroma(background).luminance() >= 0.5;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="color-box" style={{ background }}>
          <div
            className={`overlay ${copied && 'show'}`}
            style={{ background }}
          />
          <div className={`overlay-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p className={isLightColor && 'dark'}>{background}</p>
          </div>

          <div className="copy-container">
            <div className="content">
              <span className={isDarkColor && 'light'}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && 'dark'}`}>
              Copy
            </button>
          </div>

          {showLink && (
            <Link to={colorUrl} onClick={e => e.stopPropagation()}>
              <span className={`more ${isLightColor && 'dark'}`}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
