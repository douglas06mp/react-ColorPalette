import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
    const { name, background } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="color-box" style={{ background }}>
          <div
            className={`overlay ${copied && 'show'}`}
            style={{ background }}
          />
          <div className={`overlay-msg ${copied && 'show'}`}>
            <h1>copied!</h1>
            <p>{background}</p>
          </div>

          <div className="copy-container">
            <div className="content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}