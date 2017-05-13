import React, { Component } from 'react';
import {
  Alert,
  Dimensions,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import styles from './styles';

class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };

    // let `this` available inside function
    this._onNewTodoChange = this._onNewTodoChange.bind(this);
    this._onPressAddButton = this._onPressAddButton.bind(this);
  }

  _onNewTodoChange(inputVal) {
    // update newTodo when input data change
    this.setState({ newTodo: inputVal });
  }

  _onPressAddButton() {
    // send newTodo to list view
    this.props.onAdd(this.state.newTodo);

    // clear input data
    this.setState({ newTodo: '' });
  }

  render() {
    return (
      <View style={[styles.container, styles.todoInputBg]}>
        <TextInput
          placeholder="enter new todo"
          onChangeText={this._onNewTodoChange}
          value={this.state.newTodo}
        />

        <TouchableHighlight
          style={styles.todoAddButton}
          underlayColor="lightgreen"
          onPress={this._onPressAddButton}
        >
          <Text style={[styles.todoAddButtonTitle, styles.textCenter]}>
            Add
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = TodoInput;
