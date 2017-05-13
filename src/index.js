import React, { Component } from 'react';
import {
  View
} from 'react-native';

import styles from './styles';
import TodoInput from './todo.input';
import TodoList from './todo.list';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: []
    };
    this._addNewTodo = this._addNewTodo.bind(this);
  }

  _addNewTodo(_todo) {
    this.setState({ todoItems: this.state.todoItems.concat([_todo]) });
  }

  render() {
    return (
      <View>
        <TodoInput onAdd={ this._addNewTodo } />
        <TodoList todoItems={ this.state.todoItems } />
      </View>
    );
  }
}

module.exports = TodoApp;