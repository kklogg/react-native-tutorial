import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
