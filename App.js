import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import Splash from './src/screens/Splash';
import Home from './src/screens/Home'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
      </View>
        );
  }
}



const styles = {
  container: {
    flex: 1
  }
};
