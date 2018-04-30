import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default class HeaderTitle extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => alert('Pressed!')}
            >
                <Text>Press this title</Text>
            </TouchableOpacity>
        );
    }
}