import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import configureStore from './configureStore';
import PhotoFeed from './components/PhotoFeed';
import { fetchImages } from './actions';

const store = configureStore();

const Base = (props) => (
  <View style={styles.container}>
    <PhotoFeed {...props} />
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
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 20
  },
});

function mapStateToProps (state) {
  return {
    ...state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchImages: (keywords) => dispatch(fetchImages(keywords))
  }
}

export default App;
