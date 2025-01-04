import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from '../@types';

import { SafeAreaView } from 'react-native';
import App from '../App';
import { Page } from './Page';

export default function Routes() {
    const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Navigator
                    screenOptions={{
                        headerShown: false,
                        animation: 'none',
                    }}
                    initialRouteName="Home"
                >
                    <Screen
                        name="Home"
                        component={App}
                        options={{
                            statusBarBackgroundColor: 'black',
                        }}
                    />
                    <Screen
                        name="Page"
                        component={Page}
                        options={{ statusBarHidden: true, navigationBarHidden: true }}
                    />
                </Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
