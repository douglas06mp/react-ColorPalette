import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PaletteList from './PaletteList/PaletteList';
import Palette from './Palette/Palette';
import SingleColorPalette from './Palette/SingleColorPalette';
import NewPaletteForm from './NewPalette/NewPaletteForm';
import Page from './Page';
import originPalettes from '../helpers/originPalettes';
import { generatePalette } from '../helpers/colorHelpers';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    const savePalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = { palettes: savePalettes || originPalettes };
  }

  findPalette = id => {
    return this.state.palettes.find(palette => palette.id === id);
  };

  savePalette = newPalette => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  };

  deletePalette = id => {
    this.setState(
      state => ({
        palettes: state.palettes.filter(palette => palette.id !== id)
      }),
      this.syncLocalStorage
    );
  };

  syncLocalStorage = () => {
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  };

  render() {
    const { palettes } = this.state;
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="page" timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={routeProps => (
                      <Page>
                        <PaletteList
                          {...routeProps}
                          palettes={palettes}
                          deletePalette={this.deletePalette}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/new"
                    render={routeProps => (
                      <Page>
                        <NewPaletteForm
                          {...routeProps}
                          palettes={palettes}
                          savePalette={this.savePalette}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:id"
                    render={routeProps => (
                      <Page>
                        <Palette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.id)
                          )}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/palette/:paletteId/:colorId"
                    render={routeProps => (
                      <Page>
                        <SingleColorPalette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.paletteId)
                          )}
                          colorId={routeProps.match.params.colorId}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    render={routeProps => (
                      <Page>
                        <PaletteList
                          {...routeProps}
                          palettes={palettes}
                          deletePalette={this.deletePalette}
                        />
                      </Page>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    );
  }
}
