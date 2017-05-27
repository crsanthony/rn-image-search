import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import s from './styles';

export default class FeedItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={s.feedItemContainer}>
        <Image style={{width: 100, height: 100}} source={{uri: this.props.webformatURL}} />
      </View>
    )
  }
}
