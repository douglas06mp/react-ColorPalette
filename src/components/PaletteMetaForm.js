import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export default class PalletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      paletteName: ''
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
      return this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { savePalette, hideForm } = this.props;
    const { open, paletteName } = this.state;

    return (
      <Dialog
        open={open}
        onClose={hideForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter Palette Name</DialogTitle>
        <ValidatorForm onSubmit={() => savePalette(paletteName)}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your palette. Make sure it's unique.
            </DialogContentText>

            <TextValidator
              name="paletteName"
              value={paletteName}
              label="Palette Name"
              autoComplete="off"
              fullWidth
              margin="normal"
              onChange={this.handleChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={[
                'Enter palette name',
                'Palette name must be unique'
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm} color="primary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}
