import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './Navbar.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
  }

  handleFormatChange = e => {
    this.setState({ format: e.target.value, open: true }, () =>
      this.props.changeFormat(this.state.format)
    );
  };

  closeSnackbar = () => {
    this.setState({ open: false });
  };

  render() {
    const { level, changeLevel, showingAllColors } = this.props;
    const { format, open } = this.state;

    return (
      <header className="navbar">
        <div className="logo">
          <Link to="/">ColorPalette</Link>
        </div>

        {showingAllColors && (
          <div className="slider-container">
            <span>Level: {level}</span>
            <div className="slider">
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}

        <div className="select-container">
          <Select onChange={this.handleFormatChange} value={format}>
            <MenuItem value="hex">HEX</MenuItem>
            <MenuItem value="rgb">RGB</MenuItem>
            <MenuItem value="rgba">RGBA</MenuItem>
          </Select>
        </div>

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={open}
          autoHideDuration={3000}
          message={
            <span className="message">
              Format Changed To {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            'aria-describedby': 'message'
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}
