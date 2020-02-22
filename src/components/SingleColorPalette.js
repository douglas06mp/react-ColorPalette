import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';
import Footer from './Footer';
import ColorBox from './ColorBox';
import styles from './styles/PaletteStyle';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: 'hex' };
  }

  gatherShades = (palette, colorId) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorId)
      );
    }
    return shades.slice(1);
  };

  changeFormat = format => {
    this.setState({ format });
  };

  render() {
    const { paletteName, emoji, id } = this.props.palette;
    const { palette, paletteColors, back } = this.props.classes;
    const { format } = this.state;
    const ColorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showFullPalette={false}
      />
    ));
    return (
      <div className={`${palette} single-color-palette`}>
        <Navbar showingAllColors={false} changeFormat={this.changeFormat} />
        <div className={paletteColors}>
          {ColorBoxes}
          <div className={back}>
            <Link to={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <Footer name={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
