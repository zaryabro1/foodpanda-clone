import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Splash from './src/screens/Splash';


export default class App extends Component {
  render() {
    return (
      <View style={styles.contianer}>
        <Splash/>
      </View>
        );
  }
}

const styles = {
  contianer: {
    flex: 1
  }
};
