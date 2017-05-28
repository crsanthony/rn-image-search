import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import s from './styles';

export default class Detail extends Component {

  render() {
    console.log(this.props);
    return (
      <View style={s.detailContainer}>
        <View style={s.detailImageContainer}>
          <Image
            style={{
              width: this.props.webformatWidth,
              height: this.props.webformatHeight
            }}
            source={{uri: this.props.webformatURL}} />
        </View>
        <View style={s.detailMeta}>
          <Text>Author: {this.props.user}</Text>
          <Text>Tags: {this.props.tags}</Text>
          <Text>Dimensions: {this.props.imageHeight} x {this.props.imageWidth}</Text>
        </View>
      </View>
    )
  }
}
