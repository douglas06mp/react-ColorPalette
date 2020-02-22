import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyle';

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
