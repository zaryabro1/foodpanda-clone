import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';

const { width, height } = Dimensions.get('window');


export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                   <TouchableOpacity>
                    <Image
                    source={require('../../assets/user.png')}
                    tintColor={'#D60E64'}
                    style={styles.userImage}/>
                   </TouchableOpacity>
                </View>
                <View>
                   <View style={styles.deliverToView}>
                    <Text>Deliver to: </Text>
                      <TouchableOpacity>
                       <Text style={styles.addressText}>Home</Text>
                      </TouchableOpacity>
                   </View>
                </View>
                <View>
                   <TouchableOpacity>
                    <Image
                    source={require('../../assets/shoppingbag.png')}
                    tintColor={'#D60E64'}
                    style={styles.ordersImage}/>
                   </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = {
    container:{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F1',
        paddingVertical: 10,
        // height: 60
    },
    userImage: {
        height: width*0.07,
        width: width*0.07,
        resizeMode: 'contain',
        paddingLeft: 50
    },
    deliverToView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    addressText: {
        color: '#D60E64'
    },
    ordersImage: {
        height: width*0.05,
        width: width*0.05,
        resizeMode: 'contain',
        paddingRight: 50
    }
};