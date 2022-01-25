import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import DashTabs from './DashTabs';
import SingleConfig from '../pages/SingleConfig';
import MultConfig from '../pages/MultConfig';
const { Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Login" component={Login} />
                <Screen name="Dash" component={DashTabs} />
                <Screen name="SingleConfig" component={SingleConfig} />
                <Screen name="MultConfig" component={MultConfig} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;