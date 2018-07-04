// @flow

import React from 'react';
import { createTabNavigator } from 'react-navigation';
import MapScreen from './Screens/MapScreen';
import MainScreen from './Screens/MainScreen';

const AppNavigation = createTabNavigator({
    MainScreen:  {screen: MainScreen, navigationOptions: { title: 'Main Screen' },
},
MapScreen: {screen: MapScreen,navigationOptions: { title: 'Map Screen' },
},
}, {
    headerMode: 'float',
    initialRouteName: 'MainScreen',
})

export default AppNavigation;