import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: 'red'
        },
        headerTitleStyle: {
            fontSize: 20
        },
        headerTintColor: 'white'
    };

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Home screen</Text>
                <Button
                    title="Go to detail screen"
                    onPress={() => this.props.navigation.navigate('Detail', {foo: 'bar', title: 'Cutsom Title'})}
                />
            </View>
        );
    }
}