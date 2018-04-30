import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class DetailScreen extends Component {
    /*static navigationOptions = {
        title: 'Detail'
    };*/

    static navigationOptions = ({navigation, navigationOptions}) => {

        /*
        navigationOptions looks like this:
        
        {
          "headerStyle": Object {
            "backgroundColor": "#c00",
          },
          "headerTintColor": "white",
          "headerTitleStyle": Object {
            "fontSize": 20,
            "fontWeight": "bold",
          },
        }

        */

        return {
            title: navigation.state.params.title,
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor
            },
            headerTitleStyle: {
                color: navigationOptions.headerStyle.backgroundColor
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor
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