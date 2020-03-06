export default {
  paletteBox: {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '.5rem',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover .delete': {
      opacity: 1
    }
  },
  deleteContainer: {
    width: '32px',
    height: '32px',
    backgroundColor: '#eb3d30',
    position: 'absolute',
    right: '0px',
    top: '0px',
    zIndex: '10',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'all .3s ease-in-out'
  },
  deleteIcon: {
    color: '#fff'
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
