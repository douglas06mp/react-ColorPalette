import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
// import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ColorLens from '@material-ui/icons/ColorLens';
import Button from '@material-ui/core/Button';
import PaletteMataForm from './PaletteMetaForm';
import styles from './styles/NewPaletteFormNavStyle';

class NewPaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormShowing: false
    };
  }

  showForm = () => {
    this.setState({ isFormShowing: true });
  };

  hideForm = () => {
    this.setState({ isFormShowing: false });
  };

  render() {
    const { open, savePalette, palettes, handleDrawerOpen } = this.props;
    const {
      root,
      appBar,
      appBarShift,
      menuButton,
      hide,
      navBtns,
      button
    } = this.props.classes;
    const { isFormShowing } = this.state;

    return (
      <div className={root}>
        {/* <CssBaseline /> */}
        <AppBar
          color="default"
          position="fixed"
          className={clsx(appBar, {
            [appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(menuButton, { [hide]: open })}
            >
              <ColorLens />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create Palette
            </Typography>
          </Toolbar>
          <div className={navBtns}>
            <Link to="/">
              <Button variant="contained" color="secondary" className={button}>
                Go Back
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={this.showForm}
              className={button}
            >
              Save
            </Button>
          </div>
        </AppBar>
        {isFormShowing && (
          <PaletteMataForm
            palettes={palettes}
            savePalette={savePalette}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteFormNav);
