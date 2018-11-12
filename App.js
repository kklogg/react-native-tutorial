import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

/*
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    );
  }
}
*/

/*
export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}
*/

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar'/>
        <Greeting name='Jaina'/>
        <Greeting name='Valeera'/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
