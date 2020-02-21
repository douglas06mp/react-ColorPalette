import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
//import './Palette.scss';

const styles = {
  palette: {
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column'
  },
  paletteColors: {
    height: '90%',
    display: 'flex',
    flexWrap: 'wrap'
  }
};

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex'
    };
  }

  changeLevel = level => {
    this.setState({ level });
  };

  changeFormat = format => {
    this.setState({ format });
  };

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { palette, paletteColors } = this.props.classes;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        colorUrl={`${id}/${color.id}`}
        showFullPalette
      />
    ));

    return (
      <div className={palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          showingAllColors
        />
        <div className={paletteColors}>{colorBoxes}</div>
        <Footer name={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
