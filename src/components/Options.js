import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';

const { width, height } = Dimensions.get('window');


export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.Filter}</Text>
            </View>
        );
    }
}


const styles = {
    container:{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',

        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F1',
        paddingVertical: 10,
        // height: 60
    },

};