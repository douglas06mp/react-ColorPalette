export default {
  wrapper: {
    backgroundColor: 'lightblue',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  container: {
    width: '50%',
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
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
      fontSize: '2rem'
    },
    '& a': {
      color: '#fff'
    }
  },
  palettesContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
};
