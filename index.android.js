import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import TodoApp from './src';

export default class todoWithReactNative extends Component {
  render() {
    return (
      <TodoApp />
    );
  }
}

AppRegistry.registerComponent('todoWithReactNative', () => todoWithReactNative);
