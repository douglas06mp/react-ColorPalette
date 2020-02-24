export default {
  paletteBox: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '.5rem',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  colorsContainer: {
    width: '100%',
    height: '150px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    borderRadius: '5px',
    overflow: 'hidden'
  },
  miniColorBox: {
    flexBasis: '20%',
    height: '25%',
    display: 'inline-block'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'black',
    paddingTop: '.5rem',
    fontSize: '1rem'
  },
  emojiIcon: {
    marginLeft: '.5rem',
    fontSize: '1.5rem'
  }
};
