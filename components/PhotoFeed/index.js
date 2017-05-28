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

  loadMoreImages = () => {
    //this.props.fetchImages();
  }

  render() {
    if (!this.props.imageData.results) return null;
    let  images  = this.props.imageData.results.hits;
    return (
      <View style={s.feedContainer}>
        <Swiper>
          <View>
            <ListView
              canLoadMore={true}
              renderScrollComponent={props => <InfiniteScrollView {...props} />}
              onLoadMoreAsync={this.loadMoreImages}
              dataSource={this.state.dataSource.cloneWithRows(images)}
              renderRow={(item) => <FeedItem {...item} />} />
          </View>
          <View>
            <Detail />
          </View>
        </Swiper>
      </View>
    )
  }
}
