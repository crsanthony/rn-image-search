import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import configureStore from './configureStore';
import SearchBar from './components/SearchBar'
import PhotoFeed from './components/PhotoFeed';
import { fetchImages } from './actions';

const store = configureStore();

const Base = (props) => (
  <View style={styles.container}>
    <SearchBar search={props.fetchImages}/>
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
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 40
  },
});

function mapStateToProps (state) {
  return {
    images: state.images
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchImages: (keywords) => dispatch(fetchImages(keywords))
  }
}

export default App;
