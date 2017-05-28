import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import s from './styles';

export default class FeedItem extends Component {
  toggleDetail = () => {
    this.props.setDetail(this.props);
  }

  render() {
    return (
      <View style={s.feedItemContainer}>
        <TouchableOpacity onPress={this.toggleDetail}>
          <Image
            style={{width: this.props.previewHeight * 2, height: this.props.previewWidth * 2}}
            source={{uri: this.props.webformatURL}} />
        </TouchableOpacity>
      </View>
    )
  }
}
