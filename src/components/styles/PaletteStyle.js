export default {
  palette: {
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  paletteColors: {
    height: '90%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  back: {
    height: '50%',
    flexBasis: '20%',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: '#111',

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
      textTransform: 'uppercase'
    }
  }
};
