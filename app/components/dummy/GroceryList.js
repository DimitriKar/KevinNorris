import React from 'react';
import { View, FlatList, Text } from 'react-native';

const GroceryList = props => {
  const { list } = props;
  return (
    <View>
      <FlatList
        data={list}
        keyExtractor={(item, i) => "" + i}
        renderItem={({ item, index }) => {
          return <Text>{index + 1}.{item}</Text>
        }}
      />
    </View>
  )
}

export { GroceryList }