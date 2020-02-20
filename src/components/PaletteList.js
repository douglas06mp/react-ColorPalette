import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';

const styles = {
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
    color: 'white',

    '& h1': {
      fontFamily: 'Ubuntu',
      fontSize: '2rem'
    }
  },
  palettesContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '5%'
  }
};

class PaletteList extends Component {
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const { palettes } = this.props;
    const { wrapper, container, nav, palettesContainer } = this.props.classes;
    return (
      <div className={wrapper}>
        <div className={container}>
          <nav className={nav}>
            <h1>ColorPalette</h1>
            <Link to="/">Create Palette</Link>
          </nav>
          <div className={palettesContainer}>
            {palettes.map(palette => (
              <MiniPalette
                {...palette}
                key={palette.id}
                goToPalette={() => this.goToPalette(palette.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
