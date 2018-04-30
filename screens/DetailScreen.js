import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class DetailScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Detail screen received param: {this.props.navigation.state.params.foo}</Text>
                <Button
                    title="Go to detail screen again"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />

                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}