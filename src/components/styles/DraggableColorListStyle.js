import breakpoints from '../../helpers/mediaQuery';

export default {
  colorBoxes: {
    height: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',

    [breakpoints.down('xs')]: {
      marginTop: '8px'
    }
  }
};
