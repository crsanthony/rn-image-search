import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import s from './styles';

export default class Detail extends Component {
  render() {
    return (
      <View style={s.detailContainer}><Text>Imma detail</Text></View>
    )
  }
}
