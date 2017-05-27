import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import s from './styles';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={s.searchContainer}><Text>Imma Search</Text></View>
    )
  }
}
