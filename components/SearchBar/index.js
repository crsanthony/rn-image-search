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
    console.log(props);
    this.state = {
      keywordsInput: ''
    }
  }

  onChange = (keywordsInput) => {
    this.setState({keywordsInput});
    this.props.search(keywordsInput);
  }

  render() {
    return (
      <View style={s.searchContainer}>
        <View style={s.searchInputContainer}>
          <TextInput
            editable={true}
            style={s.searchInput}
            onChangeText={this.onChange}
            value={this.state.keywordsInput} />
            <TouchableOpacity
               onPress={() => this.props.search(this.state.keywordsInput)}
               style={s.searchButton}>
               <Text style={s.searchButtonText}>Search</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}
