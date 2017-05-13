import React, { Component } from 'react';
import {
  ListView,
  Text,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';

import styles from './styles';

class TodoList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(props.todoItems),
      ds: ds
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.todoItems !== this.props.todoItems) {
      this.setState({ dataSource: this.state.ds.cloneWithRows(nextProps.todoItems) });
    }
  }

  _listViewHeader() {
    return (
      <Text style={styles.todoTitle}>
        My Todo List
      </Text>
    )
  }

  _listViewBody(rowData, sectionID, rowID, highlightRow) {
    return (
      <Text style={styles.todoItem}>
        {rowID * 1 + 1}. {rowData}
      </Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          pageSize={ 8 }
          renderHeader={this._listViewHeader}
          renderRow={this._listViewBody}
        />
      </View>
    );
  }
}

module.exports = TodoList;