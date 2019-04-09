import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CategoryScreen extends Component {
  static navigationOptions = { title: "Category" };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> CategoryScreen </Text>
      </View>
    );
  }
}

export default CategoryScreen;
