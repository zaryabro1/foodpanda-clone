import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import Splash from './src/screens/Splash';


 class App extends Component {
  render() {
    return (
      <View style={styles.contianer}>
      
      </View>
        );
  }
}

const AppNavigator = createStackNavigator ({
      Start: {
        screen: Splash
      }
})
 export default createAppContainer(AppNavigator)

const styles = {
  contianer: {
    flex: 1
  }
};
