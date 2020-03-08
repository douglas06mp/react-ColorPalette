import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyle';

class PaletteList extends Component {
  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  render() {
    const { palettes, deletePalette } = this.props;
    const { wrapper, container, nav, palettesContainer } = this.props.classes;
    return (
      <div className={wrapper}>
        <div className={container}>
          <nav className={nav}>
            <h1>ColorPalette</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={palettesContainer}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...palette}
                  key={palette.id}
                  id={palette.id}
                  goToPalette={() => this.goToPalette(palette.id)}
                  deletePalette={deletePalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
