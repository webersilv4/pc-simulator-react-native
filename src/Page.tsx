import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import * as ScreenOrientation from 'expo-screen-orientation';
import WebView, { WebViewNavigation } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

interface IPropsNavigation {
    route: {
        params: {
            url: string;
        };
    };
}

export function Page({ route }: IPropsNavigation) {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    NavigationBar.setVisibilityAsync('hidden');

    const [userAgentState, setUserAgentState] = useState(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36'
    );
    const { url } = route.params;

    function getAuthGoogle({ url }: WebViewNavigation) {
        if (url.search('google.com') !== -1) {
            setUserAgentState(
                'Mozilla/5.0 (Linux; Android 10; Redmi Note 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.88 Mobile Safari/537.36'
            );
        }
    }

    return (
        <SafeAreaView style={[{ flex: 1 }]}>
            <WebView
                source={{ uri: url }}
                onNavigationStateChange={e => getAuthGoogle(e)}
                userAgent={userAgentState}
                style={{ flex: 1 }}
                setSupportMultipleWindows={false}
                useWebView2={true}
                javaScriptCanOpenWindowsAutomatically={true}
                javaScriptEnabled={true}
            />
            <StatusBar hidden={true} />
        </SafeAreaView>
    );
}
