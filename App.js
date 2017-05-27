import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

const BaseComponent = () => (
  <View style={styles.container}>
    <Text>101 Images Search</Text>
  </View>
)

BaseComponent = connect(mapStateToProps, mapDispatchToProps)(BaseComponent)

const App = () => (
  <Provider store={store}>
    <BaseComponent />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps (state) {
  return {
    images: state.images
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchImages: () => dispatch(fetchImages())
  }
}

export default App;
