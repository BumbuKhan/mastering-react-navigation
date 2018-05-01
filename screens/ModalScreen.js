import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class ModalScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Modal</Text>
                <Button
                    title="Dismiss"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}