import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaletteList from './PaletteList';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import originPalettes from '../helpers/originPalettes';
import { generatePalette } from '../helpers/colorHelpers';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: originPalettes };
  }
  findPalette = id => {
    return this.state.palettes.find(palette => palette.id === id);
  };

  savePalette = newPalette => {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  };

  render() {
    const { palettes } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <PaletteList palettes={palettes} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/palette/new"
            render={routeProps => (
              <NewPaletteForm {...routeProps} savePalette={this.savePalette} />
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
            render={routeProps => (
              <SingleColorPalette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
                colorId={routeProps.match.params.colorId}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
