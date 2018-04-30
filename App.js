import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DetailSceen from './screens/DetailScreen';

const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Detail: {
        screen: DetailSceen
    }
}, {
    initialRouteName: 'Home'
});

export default class App extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}