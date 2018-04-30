import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class DetailScreen extends Component {
    /*static navigationOptions = {
        title: 'Detail'
    };*/

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.title
        }
    };

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Detail screen received param: {this.props.navigation.state.params.foo}</Text>
                <Button
                    title="Update the title to 'Internal title'"
                    onPress={() => {this.props.navigation.setParams({
                        title: 'Internal title'
                    })}}
                />
            </View>
        );
    }
}