import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ddd',
    ...Platform.select({
      ios: {
        marginTop: 20,
      }
    })
  },
  container: {
    paddingHorizontal: 20, 
    paddingVertical: 20
  },
  textCenter: {
    textAlign: 'center'
  },
  todoTitle: {
    fontSize: 26,
    marginBottom: 15
  },
  todoItem: {
    fontSize: 20, 
    marginBottom: 10
  },
  todoInputBg: {
    backgroundColor: '#eee'
  },
  todoAddButton: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'darkgreen',
    backgroundColor: 'lightgreen',
    height: 35,
    ...Platform.select({
      ios: {
        marginTop: 20,
      }
    })
  },
  todoAddButtonTitle: {
    lineHeight: 25,
    height: 35
  }
});

module.exports = styles;