import React, {Component} from 'react';
import {View} from 'react-native';
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
