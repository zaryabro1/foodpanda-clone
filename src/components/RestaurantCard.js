import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class RestaurantCard extends Component {

    render() {
        let tags = this.props.item.categories;
        let CTags = "";
        for (let i = 0; i < tags.length; i++) {
            CTags = CTags + tags[i] + ", ";
        }

        CTags = CTags.substring(0, CTags.length - 2);
        CTags = CTags.slice(0, 30) + "...";

        return (


            <View style={styles.container}>

                <View>
                    <View style={styles.dealView}>
                        <Text style={styles.dealText}>DEAL</Text>
                    </View>
                    <View style={styles.timeView}>
                        <Text style={styles.timeText}>45 MIN</Text>
                    </View>

                    <Image
                        source={require('../../assets/hotnspicy.jpg')}
                        style={styles.cardImage}/>
                </View>
                <View style={styles.cardContentView}>
                    <View>
                        <View style={styles.cardFirstLineView}>
                            <View>
                                <Text style={styles.cardRestaurantNameText}>{this.props.item.name}</Text>
                            </View>
                            <View style={styles.cardFirstLineSecondView}>
                                <Image
                                    source={require('../../assets/ratingstar.png')}
                                    tintColor={'#2672C2'}
                                    style={styles.cardFirstLineRatingStar}/>
                                <Text>{this.props.item.rating}</Text>
                                <Text style={styles.cardFirstLineSalesText}>({this.props.item.sales})</Text>
                            </View>

                        </View>
                        <View style={styles.cardSecondLineView}>
                            <Text style={styles.cardSecondLineCostText}>{this.props.item.cost}</Text>
                            <Text style={styles.cardSecondLineTagsText}>{CTags}</Text>
                        </View>
                    </View>
                    <View style={styles.cardThirdAndFourthLineView}>
                        <View style={styles.cardThirdLineView}>
                            <Text style={styles.cardThirdLineMinCostText}>Rs. {this.props.item.min}</Text>
                            <Text style={styles.cardThirdLineMinText}> minimum</Text>
                        </View>
                        <View style={styles.cardFourthLineView}>
                            <Text style={styles.cardFourthLineDeliveryTypeText}>{this.props.item.deliveryType}</Text>
                            <Text style={styles.cardFourthLineDeliveryText}> delivery</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = {
    container: {
        // flex: 1,
        backgroundColor: "#FFFFFF",
        // height: width * 0.6,
        width: width * 0.6,
        elevation: 2,
        margin: 10,
        position: 'relative'
    },
    image: {
        flex: 1
    },
    dealView: {
        position: 'absolute',
        backgroundColor: '#D70F64',
        top: 10,
        left: 0,
        zIndex: 10,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    dealText: {
        color: '#FFFFFF'
    },
    timeView: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        top: 0,
        left: 185,
        zIndex: 10,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    timeText: {
        color: '#333333'
    },
    cardImage: {
        height: width * 0.3,
        width: width * 0.6,
        position: 'relative',
        resizeMode: 'cover'
    },
    cardContentView: {
        padding: 10
    },
    cardFirstLineView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardRestaurantNameText: {
        fontWeight: '600'
    },
    cardFirstLineSecondView: {
        flexDirection: 'row'
    },
    cardFirstLineRatingStar: {
        height: width * 0.04,
        width: width * 0.04,
        resizeMode: 'contain'
    },
    cardFirstLineSalesText: {
        paddingLeft: 5,
        color: '#999999'
    },
    cardSecondLineView: {
        flexDirection: 'row'
    },
    cardSecondLineCostText: {
        paddingRight: 5,
        color: '#999999'
    },
    cardSecondLineTagsText: {
        color: '#999999',
        textWrap: 'no-wrap'
    },
    cardThirdAndFourthLineView: {
        marginTop: 10
    },
    cardThirdLineView: {
        flexDirection: 'row'
    },
    cardThirdLineMinCostText: {
        fontWeight: '600'
    },
    cardThirdLineMinText: {
        color: '#999999'
    },
    cardFourthLineView: {
        flexDirection: 'row'
    },
    cardFourthLineDeliveryTypeText: {
        fontWeight: '600'
    },
    cardFourthLineDeliveryText: {
        color: '#999999'
    }
};