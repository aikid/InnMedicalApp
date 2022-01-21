import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import DashTabs from './DashTabs';
const { Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Login" component={Login} />
                <Screen name="Dash" component={DashTabs} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;