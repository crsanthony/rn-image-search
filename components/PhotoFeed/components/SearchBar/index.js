import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import s from './styles';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywordsInput: ''
    }
  }

  onSearch = () => {
    let keys = this.state.keywordsInput;
    let wordsArry = keys.split(' ');
    this.props.search(wordsArry);
  }

  render() {
    return (
      <View style={s.searchContainer}>
        <View style={s.searchInputContainer}>
          <TextInput
            editable={true}
            style={s.searchInput}
            onChangeText={(keywordsInput) =>  this.setState({keywordsInput})}
            value={this.state.keywordsInput} />
            <TouchableOpacity
               onPress={this.onSearch}
               style={s.searchButton}>
               <Text style={s.searchButtonText}>Search</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}
