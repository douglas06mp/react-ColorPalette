import breakpoints from '../../helpers/mediaQuery';

export default {
  '@global': {
    '.fade-exit': {
      opacity: 1
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity .4s ease'
    }
  },
  palette: {
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  paletteColors: {
    height: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start'
  },
  back: {
    height: '50%',
    flexBasis: '20%',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: '#111',
    '&:hover a': {
      opacity: 1
    },

    '& a': {
      width: '100px',
      height: '30px',
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.3)',
      color: '#fff',
      fontSize: '1rem',
      fontWeight: '700',
      lineHeight: '30px',
      textTransform: 'uppercase',
      opacity: 0,
      transition: 'all .6s ease'
    },

    [breakpoints.down('lg')]: {
      flexBasis: '25%',
      height: '33.3333%'
    },
    [breakpoints.down('md')]: {
      flexBasis: '50%',
      height: '20%'
    },
    [breakpoints.down('xs')]: {
      flexBasis: '100%',
      height: '10%'
    }
  }
};
