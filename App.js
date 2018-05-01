import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DetailSceen from './screens/DetailScreen';
import ModalScreen from './screens/ModalScreen';

const MainStack = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Detail: {
        screen: DetailSceen
    }
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#c00'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
        }
    }
});

const RootStack = StackNavigator({
    Main: {
        screen: MainStack
    },
    MyModal: {
        screen: ModalScreen
    }
}, {
    mode: 'modal',
    headerMode: 'none'
});

/*const RootStack = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Detail: {
        screen: DetailSceen
    }
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#c00'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
        }
    }
});*/

export default class App extends Component {
    render() {
        return (
            <RootStack/>
        );
    }
}