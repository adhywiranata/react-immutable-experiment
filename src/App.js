import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Map } from 'immutable';

import store from './configureStore';

import PostContainer from './containers/PostContainer';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <PostContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
