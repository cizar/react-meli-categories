import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Categories from './containers/CategoriesContainer'


class App extends Component {
  render() {
    return (
      <div>
        <Route component={Categories} />
      </div>
    );
  }
}

export default App;
