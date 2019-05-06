import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class RestaurentsDetails extends Component{

    render () {
        let mealContent = this.props.content.content;
        let formatedMealContent = '';

        for (let i=0; i < mealContent.length; i++) {
            formatedMealContent = formatedMealContent + mealContent[i] + ", ";
        }

        formatedMealContent = formatedMealContent.substring(0, formatedMealContent.length-2);

        return (
            <View style={styles.container}>
                <View style={{borderBottomColor: '#F1F1F1', borderBottomWidth: 1, padding:10, flex: 1, flexDirection: 'row'}}>
                    <View style={{flex:5}}>
                        <Text style={{fontWeight: '600'}}>{this.props.content.deal}</Text>
                        <Text style={{color: '#999999'}}>{formatedMealContent}</Text>
                    </View>
                    <View style={{flex:1, justifyContent: 'flex-end'}}>
                        <Text style={{textAlign:'right', marginRight: 5, color: '#999999'}}>Rs. {this.props.content.price}</Text>
                    </View>
                </View>

            </View>
        );
    }

}

const styles = {
    container: {
        backgroundColor: '#FFFFFF'
    }
}