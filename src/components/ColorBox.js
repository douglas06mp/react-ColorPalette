import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyle';

class ColorBox extends Component {
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
    const { name, background, colorUrl, showFullPalette } = this.props;
    const {
      colorBox,
      overlay,
      showOverlay,
      overlayMsg,
      showOverlayMsg,
      copyText,
      nameContainer,
      colorName,
      moreText,
      copyButton
    } = this.props.classes;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={colorBox} style={{ background }}>
          <div
            className={`${overlay} ${copied && showOverlay}`}
            style={{ background }}
          />
          <div className={`${overlayMsg} ${copied && showOverlayMsg}`}>
            <h1>copied!</h1>
            <p className={copyText}>{background}</p>
          </div>

          <div>
            <div className={nameContainer}>
              <span className={colorName}>{name}</span>
            </div>
            <button className={copyButton}>Copy</button>
          </div>

          {showFullPalette && (
            <Link to={colorUrl} onClick={e => e.stopPropagation()}>
              <span className={moreText}>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
