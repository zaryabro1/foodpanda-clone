import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';
import Home from './src/screens/Home';
import RestaurentsDetails from './src/screens/RestaurentsDetails';
import Header from "./src/components/Header";

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"dark-content"}  translucent={true} backgroundColor={"#FFFFFF"}/>
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
