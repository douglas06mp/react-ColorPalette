import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
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
          <Route
            exact
            path="/"
            render={routeProps => (
              <PaletteList palettes={originPalettes} {...routeProps} />
            )}
          />
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
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={() => <SingleColorPalette />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
