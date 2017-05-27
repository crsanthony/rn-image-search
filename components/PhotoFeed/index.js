import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import FeedItem from './components/FeedItem';
import Detail from './components/Detail';

import s from './styles';

export default class PhotoFeed extends Component {
  render() {
    return (
      <View style={s.feedContainer}>
        <Text>Imma PhotoFeed</Text>
        <FeedItem />
        <Detail />
      </View>
    )
  }
}
