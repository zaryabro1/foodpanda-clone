import React, {Component} from 'react';
import {View, StatusBar} from 'react-native'
import {createStackNavigator, createAppContainer} from "react-navigation";
import Home from './src/screens/Home';
import RestaurentsDetails from './src/screens/RestaurentsDetails';
import Splash from './src/screens/Splash';
import Header from "./src/components/Header";
import Filter from './src/screens/Filter'

const StackNavigator = createStackNavigator({
        Home: Home,
        RestaurentsDetails: RestaurentsDetails,
        Splash: Splash,
        Filter: Filter

    },
    {initialRouteName: "Home",
                headerMode: "none"}


);
const AppContainer = createAppContainer(StackNavigator);

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={"dark-content"} translucent={true} backgroundColor={"#FFFFFF"}/>
                <AppContainer/>
            </View>
        );
    }
}

export default App
const styles = {
    container: {
        flex: 1
    }
};
