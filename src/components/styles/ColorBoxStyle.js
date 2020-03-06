import chroma from 'chroma-js';
import breakpoints from '../../helpers/mediaQuery';

export default {
  colorBox: {
    height: props => (props.showFullPalette ? '25%' : '50%'),
    flexBasis: '20%',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    '&:hover button': {
      opacity: '1'
    },

    [breakpoints.down('lg')]: {
      flexBasis: '25%',
      height: props => (props.showFullPalette ? '20%' : '33.33%')
    },
    [breakpoints.down('md')]: {
      flexBasis: '50%',
      height: props => (props.showFullPalette ? '10%' : '20%')
    },
    [breakpoints.down('xs')]: {
      flexBasis: '100%',
      height: props => (props.showFullPalette ? '5%' : '10%')
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
      color: '#fff',

      [breakpoints.down('xs')]: {
        fontSize: '5rem'
      }
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
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,.7)' : 'white',
    width: '100px',
    height: '30px',
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    fontWeight: '700',
    lineHeight: '30px',
    textTransform: 'uppercase',
    opacity: 0,
    transition: 'all .6s ease'
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
