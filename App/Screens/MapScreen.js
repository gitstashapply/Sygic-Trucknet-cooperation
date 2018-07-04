// @flow

import React from 'react';
import {View} from 'react-native';
import data from './../rideData.json';
import { Container, Header, Content, Card, CardItem, Body, Text, H1 } from 'native-base';

class MapScreen extends React.PureComponent<{}> {
    render() {
        return (
            <View style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Content>
                        <Card style={{height: 200, width: 300}}>
                            <CardItem>
                            <Body>
                                <H1>
                                    Ride Data:
                                </H1>
                                <Text>From: {data.originName}</Text>
                                <Text>To: {data.destinationName}</Text>
                            </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </View>
                <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(153, 204, 255, 0.9)'}}>
                    <H1 style={{color: 'white'}}>
                        Here will be our navigation module
                    </H1>
                </View>
            </View>
        )
    }
}

export default MapScreen;

