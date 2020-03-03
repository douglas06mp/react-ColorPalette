import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './styles/ColorPickerFormStyle';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'aquamarine',
      colorName: ''
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', value => {
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule('isColorUnique', value => {
      return this.props.colors.every(({ color }) => color !== this.state.color);
    });
  }

  changeColor = newColor => {
    this.setState({ color: newColor.hex });
  };

  handleSubmit = () => {
    const newColor = {
      color: this.state.color,
      name: this.state.colorName
    };
    this.props.addNewColor(newColor);
    this.setState({ colorName: '' });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isPaletteFull, classes } = this.props;
    const { color, colorName } = this.state;

    return (
      <div>
        <ChromePicker
          color={color}
          onChangeComplete={this.changeColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            name="colorName"
            value={colorName}
            onChange={this.handleChange}
            variant="filled"
            margin="normal"
            autoComplete="off"
            placeholder="Color Name"
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'Enter color name',
              'Color name must be unique',
              'Color already used'
            ]}
            className={classes.colorNameInput}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isPaletteFull}
            style={{ backgroundColor: isPaletteFull ? 'lightgrey' : color }}
            className={classes.addColor}
          >
            {isPaletteFull ? 'Palete Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
