import breakpoints from '../../helpers/mediaQuery';
import background from './background.svg';

export default {
  wrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflowY: 'scroll',
    /* background by SVGBackgrounds.com */
    backgroundColor: '#2b82fc',
    backgroundImage: `url(${background})`
  },
  container: {
    width: '50%',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap',

    [breakpoints.down('xl')]: {
      width: '70%'
    },
    [breakpoints.down('lg')]: {
      width: '80%'
    },
    [breakpoints.down('xs')]: {
      width: '75%'
    }
  },
  nav: {
    width: '100%',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',

    '& h1': {
      fontFamily: 'Ubuntu',
      fontSize: '2rem',
      [breakpoints.down('lg')]: {
        fontSize: '1.8rem'
      },
      [breakpoints.down('sm')]: {
        fontSize: '1.3rem'
      }
    },
    '& a': {
      color: '#fff',
      [breakpoints.down('md')]: {
        fontSize: '.8rem'
      }
    }
  },
  palettesContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '2.8rem',

    [breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 45%)',
      gridGap: '3.5rem'
    },
    [breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '2%'
    }
  }
};
