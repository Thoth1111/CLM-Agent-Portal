import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AgentContext } from '../components/AgentContext';

import Home from '../screens/Home';
import Login from '../screens/Login';
import SelectedLicense from '../screens/SelectedLicense';
import DueLicenses from '../screens/DueLicenses';
import Account from '../screens/Account';
import Scanner from '../screens/Scanner';
import ScannedLicense from '../screens/ScannedLicense';

import { Colors } from '../components/styles';

const { green } = Colors;
const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <AgentContext.Consumer>
            {({ agentData }) => (
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backGroundColor: 'transparent'
                            },
                            headerTitle: '',
                            headerTransparent: true,
                            headerTintColor: green,
                        }}
                        initialRouteName='Login'
                    >
                        {agentData ? (
                            <>
                                <Stack.Screen name='Home' component={Home} />
                                <Stack.Screen name='SelectedLicense' component={SelectedLicense} />
                                <Stack.Screen name='DueLicenses' component={DueLicenses} />
                                <Stack.Screen name='Account' component={Account} />
                                <Stack.Screen name='Scanner' component={Scanner} />
                                <Stack.Screen name='ScannedLicense' component={ScannedLicense} />
                            </>
                        ) : (
                            <Stack.Screen name='Login' component={Login} />
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </AgentContext.Consumer>
    )
}

export default RootStack;