import breakpoints from '../../helpers/mediaQuery';

export default {
  box: {
    flexBasis: '20%',
    height: '25%',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',

    '&:hover svg': {
      color: '#fff',
      transform: 'scale(1.3)'
    },

    [breakpoints.down('lg')]: {
      flexBasis: '25%',
      height: '20%'
    },
    [breakpoints.down('md')]: {
      flexBasis: '50%',
      height: '10%'
    },
    [breakpoints.down('sm')]: {
      flexBasis: '100%',
      height: '5%'
    }
  },
  content: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: '700',
    color: 'rgba(0,0,0,.5)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  deleteIcon: {
    transition: 'all .4s ease-in-out'
  }
};
