import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';


export default class Splash extends Component {

    componentWillMount(): void {
        setTimeout(() => this.props.navigation.navigate('Home'), 3000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/foodpandalogo.png')}/>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D60E64',
    }


});
