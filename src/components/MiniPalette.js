import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyle';

class MiniPalette extends Component {
  render() {
    const { paletteName, emoji, colors } = this.props;
    const {
      paletteBox,
      deleteContainer,
      deleteIcon,
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
        <div className={`delete ${deleteContainer}`}>
          <DeleteIcon className={deleteIcon} />
        </div>
        <div className={colorsContainer}>{miniColorBoxes}</div>
        <h5 className={title}>
          {paletteName} <span className={emojiIcon}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
