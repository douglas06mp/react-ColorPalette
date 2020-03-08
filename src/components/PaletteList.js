import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyle';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = { isDeleteDialogOpen: false, deletingId: '' };
  }

  openDialog = id => {
    this.setState({ isDeleteDialogOpen: true, deletingId: id });
  };

  closeDialog = () => {
    this.setState({ isDeleteDialogOpen: false, deletingId: '' });
  };

  goToPalette = id => {
    this.props.history.push(`/palette/${id}`);
  };

  deletePalette = () => {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  };

  render() {
    const { palettes } = this.props;
    const { wrapper, container, nav, palettesContainer } = this.props.classes;
    const { isDeleteDialogOpen } = this.state;

    return (
      <div className={wrapper}>
        <div className={container}>
          <nav className={nav}>
            <h1>ColorPalette</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={palettesContainer}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...palette}
                  key={palette.id}
                  id={palette.id}
                  goToPalette={() => this.goToPalette(palette.id)}
                  openDialog={this.openDialog}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={isDeleteDialogOpen}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.deletePalette}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
