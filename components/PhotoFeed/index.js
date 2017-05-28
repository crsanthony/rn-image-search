import React, { Component } from 'react';
import {
  View,
  Text,
  ListView
} from 'react-native';
import Swiper from 'react-native-swiper';
import FeedItem from './components/FeedItem';
import Detail from './components/Detail';
import s from './styles';

export default class PhotoFeed extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      detail: null,
      canSwipe: false
    }
  }

  setDetail = (detail) => {
    this.setState({detail, canSwipe: true});
    this.refs['swiper'].scrollBy(1);
  }

  onMomentumScrollEnd = () => {
    if (this.refs['swiper'].state.index === 0) {
      this.setState({canSwipe: false});
    }
  }

  render() {
    if (!this.props.imageData.results) return null;
    let  images  = this.props.imageData.results.hits;
    return (
      <View style={s.feedContainer}>
        <Swiper
          ref='swiper'
          scrollEnabled={this.state.canSwipe}
          onMomentumScrollEnd={this.onMomentumScrollEnd}>
          <View>
            <ListView
              dataSource={this.state.dataSource.cloneWithRows(images)}
              renderRow={(item) => <FeedItem {...item} setDetail={this.setDetail} />} />
          </View>
          <View>
            <Detail {...this.state.detail} />
          </View>
        </Swiper>
      </View>
    )
  }
}
