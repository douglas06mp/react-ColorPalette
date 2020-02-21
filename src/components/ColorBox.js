import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
import './ColorBox.scss';

const styles = {
  colorBox: {
    height: props => (props.showFullPalette ? '25%' : '50%'),

    '& button': {
      opacity: '0'
    },
    '&:hover button': {
      opacity: '1',
      transition: '.5s'
    }
  },
  overlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transition: 'transform 0.5s ease-in-out',
    transform: 'scale(0.1)'
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute'
  },
  overlayMsg: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    '& h1': {
      textShadow: '1px 2px #000',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      padding: '1rem',
      textTransform: 'uppercase',
      color: '#fff'
    },
    '& p': {
      fontSize: '2.5rem',
      marginTop: '1rem',
      letterSpacing: '2px'
    }
  },
  showOverlayMsg: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '20',
    transition: '0.4s ease-in-out',
    transitionDelay: '0.3s'
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'
  },
  nameContainer: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px'
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.1 ? 'white' : 'black'
  },
  copyAndBackButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,.7)' : 'white'
  },
  moreText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,.7)' : 'white',
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0',
    bottom: '0',
    width: '60px',
    height: '30px',
    lineHeight: '30px',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
};

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
      copyAndBackButton
    } = this.props.classes;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={`color-box ${colorBox}`} style={{ background }}>
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
            <button className={`copy-button ${copyAndBackButton}`}>Copy</button>
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
