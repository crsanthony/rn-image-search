import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import s from './styles';

export default class FeedItem extends Component {
  toggleDetail = () => {}

  render() {
    return (
      <View style={s.feedItemContainer}>
        <Image
          style={{width: this.props.previewHeight * 2, height: this.props.previewWidth * 2}}
          source={{uri: this.props.webformatURL}} />
      </View>
    )
  }
}
