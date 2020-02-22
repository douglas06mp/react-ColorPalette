import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyle';

class Footer extends Component {
  render() {
    const { name, emoji } = this.props;
    const { footer, emojiIcon } = this.props.classes;

    return (
      <footer className={footer}>
        {name}
        <span className={emojiIcon}>{emoji}</span>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
