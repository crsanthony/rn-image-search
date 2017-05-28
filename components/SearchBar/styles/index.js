import React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  searchContainer: {
    height: 60,
    width: 100,
    flexDirection: 'row',
    marginBottom: 5
  },
  searchInputContainer: {
    paddingLeft: 5,
    width: 360,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchInput: {
    paddingLeft: 4,
    borderWidth: 1,
    borderColor: 'black',
    height: 60,
    minWidth: 250,
    flex: 1
  },
  searchButton: {
    backgroundColor: '#314c72',
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  searchButtonText: {
    color: 'white'
  }
});

export default Styles;
