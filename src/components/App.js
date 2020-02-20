import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import originPalettes from '../helpers/originPalettes';
import { generatePalette } from '../helpers/colorHelpers';
import './App.scss';

export default class App extends Component {
  findPalette = id => {
    return originPalettes.find(palette => palette.id === id);
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
