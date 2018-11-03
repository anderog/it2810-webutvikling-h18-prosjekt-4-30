import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import TitleBar from './components/TitleBar';
import Products from './components/Products';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}> {/* Wraps the React application and makes the Redux state available to all container components in the application’s hierarchy */}
        <div className="App">
          <TitleBar/>
          <Products/>
        </div>
      </Provider>
    );
  }
}

export default App;
