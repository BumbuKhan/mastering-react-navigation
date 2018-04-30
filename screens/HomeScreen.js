import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class HomeScreen extends Component {
    // static navigationOptions = {
    //     title: 'Home',
    //     headerRight: (
    //         <Button
    //             onPress={() => {
    //                 alert('Pressed button on the header');
    //             }}
    //             title="+1"
    //             color="white"
    //         />
    //     )
    // };

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};

        return {
            title: 'Home',
            headerRight: (
                <Button
                    title="+1"
                    color="white"
                    onPress={params.increaseCount}
                />
            )
        }

    };

    state = {
        count: 0
    };

    componentWillMount = () => {
        this.props.navigation.setParams({
            increaseCount: this._increaseCount
        });
    };

    _increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>Home screen</Text>
                <Text>State.count: {this.state.count}</Text>
                <Button
                    title="Go to detail screen"
                    onPress={() => this.props.navigation.navigate('Detail', {foo: 'bar', title: 'Cutsom Title'})}
                />
            </View>
        );
    }
}