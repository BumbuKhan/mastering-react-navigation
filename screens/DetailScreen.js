import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class DetailScreen extends Component {
    static navigationOptions = {
        title: 'Detail'
    };

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Detail screen received param: {this.props.navigation.state.params.foo}</Text>
            </View>
        );
    }
}