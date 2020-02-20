import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    const { name, emoji } = this.props;
    return (
      <footer className="footer">
        {name}
        <span className="emoji">{emoji}</span>
      </footer>
    );
  }
}
