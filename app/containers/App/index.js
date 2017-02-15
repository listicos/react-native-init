import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import createStore from 'store/createStore';
import Root from './root';

const store = createStore();

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App;
