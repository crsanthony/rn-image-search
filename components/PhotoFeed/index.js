import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import FeedItem from './components/FeedItem';
import Detail from './components/Detail';

import s from './styles';

export default class PhotoFeed extends Component {

  renderImages() {
    let { images } = this.props.images;
    if (!images) return;

    let feedImgs = images.map((item) => {
      return <FeedItem {...item} key={item.id} />
    });
    return feedImgs;
  }

  render() {
    return (
      <View style={s.feedContainer}>
        { this.renderImages() }
      </View>
    )
  }
}
