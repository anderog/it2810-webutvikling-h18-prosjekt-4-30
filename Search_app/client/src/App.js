import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import TitleBar from "./components/TitleBar";
import Products from "./components/Products";
import Category from "./components/Category";
import OrderBy from "./components/OrderBy";

import "./App.css";

class App extends Component {
  render() {
    return (
      // Provider: wraps the React application and makes the Redux state available to all container components in the application’s hierarchy
      <Provider store={store}>
        <div className="App">
          <TitleBar />
          <Category />
          <OrderBy />
          <Products />
        </div>
      </Provider>
    );
  }
}

export default App;
