import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native';
import Deals from "../components/Deals"

const {width, height} = Dimensions.get('window');

const RestaurantsDeals = {
    deal: "Your Food Your Way Deal 1",
    content: ["Chicken", "Tawa boneless full", "4 sada naan", "Mint sauce", "1.5 litre soft drink"],
    price: 571
}

export default class RestaurentsDetails extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{position: 'relative', height: width * 0.6, width: width}}>

                    <Image
                        source={require('../../assets/hotnspicy.jpg')}
                        style={{
                            zIndex: 10,
                            position: 'absolute',
                            height: width * 0.6,
                            width: width,
                            resizeMode: 'cover'
                        }}/>

                    <View style={{
                        position: 'absolute',
                        zIndex: 10010,
                        backgroundColor: '#2B2B2B',
                        opacity: 0.5,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}/>

                    <View style={{
                        position: 'absolute',
                        // backgroundColor: 'green',
                        zIndex: 10011,
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }}>
                        <View style={{
                            flex: 1,
                            // backgroundColor: "blue",
                            justifyContent: 'center',
                            alignContent: 'center',
                        }}>
                           <View style={{width: width, alignItems: 'center', marginBottom:5}}>
                            <Text style={{textAlignLast: 'center', color: '#FFFFFF', fontSize: 20}}>KARACHI HOT N SPICY - JOHAR TOWN</Text>
                           </View>
                            <View style={{
                                borderWidth: 1,
                                borderRadius: 5,
                                borderColor: '#FFFFFF',
                                width: 60,
                                alignSelf: 'center'
                            }}>

                                <Text style={{color: '#FFFFFF', textAlign: 'center'}}>Delivery 45 min</Text>
                            </View>

                        </View>
                    </View>
                </View>
                <ScrollView>
                    <Deals content={RestaurantsDeals}/>
                    <Deals content={RestaurantsDeals}/>
                    <Deals content={RestaurantsDeals}/>
                    <Deals content={RestaurantsDeals}/>

                </ScrollView>
            </View>
        );
    }

}

const styles = {
    container: {
        flex: 1
    }
}