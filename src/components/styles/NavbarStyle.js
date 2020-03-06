import breakpoints from '../../helpers/mediaQuery';

export default {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '5%'
  },
  logo: {
    width: '180px',
    padding: '0 13px',
    fontSize: '24px',
    backgroundColor: '#eceff1',
    fontFamily: 'Ubuntu',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& a': {
      color: '#000',
      fontWeight: '700'
    },

    [breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  sliderContainer: {
    marginLeft: '15px'
  },
  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',

    '& .rc-slider-track': {
      background: 'transparent'
    },
    '& .rc-slider-rail': {
      height: '8px'
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus': {
      background: 'green',
      outline: 'none',
      border: '2px solid green',
      boxShadow: 'none',
      width: '13px',
      height: '13px',
      marginLeft: '-7px',
      marginTop: '-3px'
    },
    [breakpoints.down('xs')]: {
      width: '150px'
    }
  },
  select: {
    marginLeft: 'auto',
    marginRight: '1rem'
  }
};
