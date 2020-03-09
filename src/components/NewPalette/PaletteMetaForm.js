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
      stage: 'name',
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

  showEmojiPicker = () => {
    this.setState({ stage: 'emoji' });
  };

  savePalette = emoji => {
    const newPalette = {
      paletteName: this.state.paletteName,
      emoji: emoji.native
    };
    this.props.savePalette(newPalette);
    this.setState({ stage: '' });
  };

  render() {
    const { hideForm } = this.props;
    const { stage, paletteName } = this.state;

    return (
      <div>
        <Dialog open={stage === 'emoji'} onClose={hideForm}>
          <DialogTitle id="form-dialog-title">Choose Palette Emoji</DialogTitle>
          <Picker
            onSelect={this.savePalette}
            title="Choose Your Emoji"
            darkMode={false}
          />
        </Dialog>
        <Dialog
          open={stage === 'name'}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enter Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for your palette. Make sure it's unique.
              </DialogContentText>

              <TextValidator
                name="paletteName"
                value={paletteName}
                label="Palette Name"
                autoComplete="off"
                autoFocus={true}
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
      </div>
    );
  }
}
