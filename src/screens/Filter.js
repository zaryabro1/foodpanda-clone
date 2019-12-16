import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import Options from '../components/Options'

const { width, height } = Dimensions.get('window');


export default class Filter extends Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.head}>

                <View>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}>
                        <Image
                            source={require('../../assets/cross.png')}
                            tintColor={'#D60E64'}
                            style={styles.userImage}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.deliverToView}>
                        <Text style={{fontSize: 20}}>Filters</Text>

                    </View>
                </View>
                <View>

                        <Image
                            source={require('../../assets/shoppingbag.png')}
                            tintColor={'#FFFFFF'}
                            style={styles.ordersImage}/>

                 </View>

            </View>

              <View style={{width: width, justifyContent:'center', alignItems:'center'}}>
                  <Text style={{fontWeight: '600', fontSie}}>Price</Text>
              </View>
              
          </View>
        );
    }
}


const styles = {
    container:{
        flex:1,
        backgroundColor: '#F7F7F7'
        // height: 60
    },
    head: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F1',
        paddingVertical: 10,
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
        paddingRight: 50,

    }
};