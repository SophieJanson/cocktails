import React, { Component } from 'react';
import CocktailCategoryListContainer from './components/CocktailCategoryListContainer'
import CocktailImagesContainer from './components/CocktailImagesContainer'
import CocktailDetailsContainer from './components/CocktailDetailsContainer'
import SearchContainer from './components/SearchContainer'
import { Route } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
        <Route exact path="/" component={CocktailCategoryListContainer} />
        <Route exact path="/" component={SearchContainer} />
        <Route exact path="/categories/:category" component={CocktailImagesContainer} />
        <Route exact path="/categories/drinks/:id" component={CocktailDetailsContainer} />
        </main>
      </div>
    );
  }
}

export default App;
