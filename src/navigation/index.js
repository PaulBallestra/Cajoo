import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Landing from '../features/onboarding/landing/landing.screen';
import Login from '../features/onboarding/login/login.screen';

const rootContainer = () => {
    return (

        <NavigationContainer>

            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="landing"
                    component={Landing}
                />
                <Stack.Screen
                    name="login"
                    component={Login}
                />

            </Stack.Navigator>

        </NavigationContainer>

    );
};

export default rootContainer;
