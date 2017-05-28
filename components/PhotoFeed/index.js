import React, { Component } from 'react';
import {
  View,
  Text,
  ListView
} from 'react-native';
import InfiniteScrollView from 'react-native-infinite-scroll-view'
import Swiper from 'react-native-swiper';
import FeedItem from './components/FeedItem';
import Detail from './components/Detail';

import s from './styles';

export default class PhotoFeed extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds
    }
  }

  render() {
    let images = this.props.images.images ? this.props.images.images : this.props.images //wtf
    if (!images.length) return null;

    return (
      <View style={s.feedContainer}>
        <Swiper>
          <View>
            <ListView
              dataSource={this.state.dataSource.cloneWithRows(images)}
              renderRow={(item) => <FeedItem {...item} />} />
          </View>
          <View>
            <Detail item={{src: 'http://google.com'}} />
          </View>
        </Swiper>
      </View>
    )
  }
}
