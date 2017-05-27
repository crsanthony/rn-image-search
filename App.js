import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import configureStore from './configureStore';
import SearchBar from './components/SearchBar'
import PhotoFeed from './components/PhotoFeed';

const store = configureStore();

const Base = () => (
  <View style={styles.container}>
    <SearchBar />
    <PhotoFeed />
  </View>
)

Base = connect(mapStateToProps, mapDispatchToProps)(Base)

const App = () => (
  <Provider store={store}>
    <Base />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
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
