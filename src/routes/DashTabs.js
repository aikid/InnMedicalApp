import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Configuracoes from '../pages/Configuracoes';
import Dashboard from '../pages/Dashboard';
import Triagem from '../pages/Triagem';
const { Navigator, Screen} = createBottomTabNavigator();

function DashTabs(){
    return(
            <Navigator 
                tabBarOptions={{ 
                    style:{
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 65,
                    },
                    tabStyle:{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    iconStyle:{
                        flex: 0,
                        width: 20,
                        height: 35
                    },
                    labelStyle: {
                        fontSize: 12,
                        marginLeft: 10,
                    },
                    inactiveBackgroundColor: '#fafafc',
                    activeBackgroundColor: '#ebebf5',
                    inactiveTintColor: '#c1bccc',
                    activeTintColor: '#32264d'
                 }}>
                <Screen 
                    name="Dashboard" 
                    component={Dashboard} 
                    options={{ 
                        tabBarLabel: 'Triagens',
                        tabBarIcon: ({ color, size}) => {
                            return(
                                <Ionicons name='list-outline' size={size} color={color}/>
                            )
                        }
                    }} 
                />
                <Screen 
                    name="Triagem" 
                    component={Triagem}
                    options={{ 
                        tabBarIcon: ({ color, size}) => {
                            return(
                                <Ionicons name='clipboard' size={size} color={color}/>
                            )
                        }
                    }} 
                />
                <Screen 
                    name="Configuracoes" 
                    component={Configuracoes} 
                    options={{ 
                        tabBarIcon: ({ color, size}) => {
                            return(
                                <Ionicons name='settings' size={size} color={color}/>
                            )
                        }
                    }} 
                />
            </Navigator>
    );
}

export default DashTabs;