import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Header from '../components/Header';
import RestaurantCard from '../components/RestaurantCard';

const {width} = Dimensions.get('window');

const restaurantItem = {
    name: "Karachi Hot N Spicy",
    rating: 4.1,
    sales: 8500,
    cost: 1,
    categories: ["Pakistani", "Burgers", "Chinese", "Spanish", "Turkish"],
    min: 100,
    deliveryType: 'Free',
};

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <View style={styles.searchBarView}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/search.png')}
                                tintColor={'#D60E64'}
                                style={styles.searchImage}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchTextInputView}>
                        <TextInput
                            placeholder={'e.g. Japanese, Burgers...'}/>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/filter.png')}
                                tintColor={'#D60E64'}
                                style={styles.filterButton}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <Text style={styles.categoriesHeading}>Order again from</Text>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('RestaurentsDetails')}}>
                        <RestaurantCard item={restaurantItem}/>
                    </TouchableOpacity>
                    <Text style={styles.categoriesHeading}>Recommended for you</Text>

                    <ScrollView horizontal={'true'}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('RestaurentsDetails')}}>
                            <RestaurantCard item={restaurantItem}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('RestaurentsDetails')}}>
                            <RestaurantCard item={restaurantItem}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('RestaurentsDetails')}}>
                            <RestaurantCard item={restaurantItem}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('RestaurentsDetails')}}>
                            <RestaurantCard item={restaurantItem}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('RestaurentsDetails')}}>
                            <RestaurantCard item={restaurantItem}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('RestaurentsDetails')}}>
                            <RestaurantCard item={restaurantItem}/>
                        </TouchableOpacity>
                    </ScrollView>
                    <View>
                        <Text style={styles.categoriesHeading}>All Restaurants</Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}


const styles = {
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",

    },
    searchBarView: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F1',
        elevation: 1
    },
    searchImage: {
        height: width * 0.05,
        width: width * 0.05,
        resizeMode: 'contain',
        marginLeft: 10,
        marginTop: 15
    },
    searchTextInputView: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15
    },
    filterButton: {
        height: width * 0.05,
        width: width * 0.05,
        resizeMode: 'contain',
        marginTop: 15,
        marginRight: 10
    },
    categoriesHeading: {
        fontSize: 20,
        padding: 5,
        marginTop: 25,
        marginLeft: 5
    }

};