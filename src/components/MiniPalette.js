import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
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
    borderRadius: '5px',
    overflow: 'hidden'
  },
  miniColorBox: {
    flexBasis: '20%',
    height: '25%',
    display: 'inline-block',
    margin: '0 auto'
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

class MiniPalette extends Component {
  render() {
    const { paletteName, emoji, colors } = this.props;
    const {
      paletteBox,
      colorsContainer,
      miniColorBox,
      title,
      emojiIcon
    } = this.props.classes;

    const miniColorBoxes = colors.map(({ color, name }) => (
      <div
        className={miniColorBox}
        style={{ backgroundColor: color }}
        key={name}
      />
    ));

    return (
      <div className={paletteBox} onClick={this.props.goToPalette}>
        <div className={colorsContainer}>{miniColorBoxes}</div>
        <h5 className={title}>
          {paletteName} <span className={emojiIcon}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
