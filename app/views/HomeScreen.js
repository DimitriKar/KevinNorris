import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = { title: "Home" };
    
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Button
            title="Go to category"
            onPress={()=>{
                this.props.navigation.navigate("Category")
            }}
        />
      </View>
    );
  }
}

export default HomeScreen;
