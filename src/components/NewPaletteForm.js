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

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    height: 'calc(100vh - 64px)',
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class NewPaletteForm extends Component {
  static defaultProps = {
    MAX_COLORS: 20
  };

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: this.props.palettes[0].colors
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

  savePalette = paletteName => {
    const newPalette = {
      paletteName,
      id: paletteName.toLowerCase().replace(/ /g, '-'),
      colors: this.state.colors
    };
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
    const idx = Math.floor(Math.random() * allColors.length);
    const randomColors = allColors[idx];
    this.setState({ colors: [...this.state.colors, randomColors] });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };

  render() {
    const { classes, palettes, MAX_COLORS } = this.props;
    const { open, colors } = this.state;
    const isPaletteFull = colors.length >= MAX_COLORS;

    return (
      <div className={classes.root}>
        <NewPaletteFormNav
          open={open}
          palettes={palettes}
          savePalette={this.savePalette}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Typography variant="h4">Design Your Palette</Typography>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.clearPalette}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.addRandomColor}
              disabled={isPaletteFull}
              style={{ backgroundColor: isPaletteFull ? 'lightgrey' : '' }}
            >
              Random Color
            </Button>
          </div>

          <ColorPickerForm
            isPaletteFull={isPaletteFull}
            addNewColor={this.addNewColor}
            colors={colors}
          />
        </Drawer>

        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />

          <DraggableColorList
            colors={colors}
            deleteColor={this.deleteColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);