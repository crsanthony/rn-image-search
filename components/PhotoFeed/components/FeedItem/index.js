import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import s from './styles';

export default class FeedItem extends Component {
  render() {
    return (
      <View style={s.feedItemContainer}><Text>Imma FeedItem</Text></View>
    )
  }
}
