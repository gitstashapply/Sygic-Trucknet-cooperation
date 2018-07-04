// @flow

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Toast from './../Components/Toast';
import { Button, Input, Item } from 'native-base';


class MainScreen extends React.PureComponent<{}> {

    state={
        input: null,
    }


    _handlePress = () => {
        // here we call our native component and pass props 'Value' and 'Duration'
        Toast.show(this.state.input, 100)
    }

    setInputState = (text) => {
        this.setState({
            input: text,
        })
        console.log(this.state.input);
    }

    render() {
        return (
            <View style={{width: '100%', height: '100%',  alignItems: 'center', justifyContent: 'center'}}>
                <Text>Hello there!</Text>
                <Text>Here we got text input, write something in it</Text>
                <View style={{width: 300, marginTop: 24}}>
                    <Item regular>
                        <Input onChangeText={(text) => this.setInputState(text) } placeholder='Write your text here' />
                    </Item>
                </View>
                {
                    this.state.input
                    ? 
                    <View style={{marginTop: 24, alignItems: 'center', justifyContent: 'center'}}>
                    <View><Text style={{color: 'green'}}>Now, if you press the Button, you will call our native component Toast with your text!</Text></View>
                    <View style={{marginTop: 24}}>
                        <Button style={{width: 100, justifyContent: 'center'}} success onPress={() => this._handlePress()}>
                            <Text>Press Me!</Text>
                        </Button>
                    </View>
                </View>
                : null  
                }

            </View>
        )
    }
}

export default MainScreen;

