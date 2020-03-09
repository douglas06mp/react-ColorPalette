import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { arrayMove } from 'react-sortable-hoc';
import DraggableColorList from './DraggableColorList';
import NewPaletteFormNav from './NewPaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import originPalettes from '../helpers/originPalettes';
import styles from './styles/NewPaletteFormStyle';

class NewPaletteForm extends Component {
  static defaultProps = {
    MAX_COLORS: 20
  };

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: originPalettes[0].colors
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor = newColor => {
    this.setState({ colors: [...this.state.colors, newColor], colorName: '' });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  savePalette = newPalette => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = this.state.colors;
    this.props.savePalette(newPalette);
    this.props.history.push('/');
  };

  deleteColor = colorName => {
    this.setState({
      colors: this.state.colors.filter(({ name }) => name !== colorName)
    });
  };

  clearPalette = () => {
    this.setState({ colors: [] });
  };

  addRandomColor = () => {
    const allColors = this.props.palettes.map(palette => palette.colors).flat();
    let idx;
    let randomColors;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      idx = Math.floor(Math.random() * allColors.length);
      randomColors = allColors[idx];
      isDuplicateColor = this.state.colors.some(
        color => color.name === randomColors.name // eslint-disable-line no-loop-func
      );
    }
    this.setState({ colors: [...this.state.colors, randomColors] });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };

  render() {
    const { palettes, MAX_COLORS } = this.props;
    const {
      root,
      drawer,
      drawerPaper,
      drawerHeader,
      container,
      buttons,
      button,
      content,
      contentShift
    } = this.props.classes;
    const { open, colors } = this.state;
    const isPaletteFull = colors.length >= MAX_COLORS;

    return (
      <div className={root}>
        <NewPaletteFormNav
          open={open}
          palettes={palettes}
          savePalette={this.savePalette}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: drawerPaper
          }}
        >
          <div className={drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />

          <div className={container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={buttons}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.clearPalette}
                className={button}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={this.addRandomColor}
                disabled={isPaletteFull}
                style={{ backgroundColor: isPaletteFull ? 'lightgrey' : '' }}
                className={button}
              >
                Random Color
              </Button>
            </div>

            <ColorPickerForm
              isPaletteFull={isPaletteFull}
              addNewColor={this.addNewColor}
              colors={colors}
            />
          </div>
        </Drawer>

        <main
          className={clsx(content, {
            [contentShift]: open
          })}
        >
          <div className={drawerHeader} />

          <DraggableColorList
            colors={colors}
            deleteColor={this.deleteColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
            distance={20}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
