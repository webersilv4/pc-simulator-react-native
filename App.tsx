import React, { useState } from 'react';
import validator from 'validator';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from './@types';
import { ButtonSearch } from './src/styled-components/Buttons';
import { Favorites } from './src/Components/Cards';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);

    const navigation = useNavigation<propsStack>();

    const [url, setUrl] = useState<string>('');
    const [alert, setAlert] = useState<string>();

    return (
        <SafeAreaView style={[{ flex: 1 }, styles.container]}>
            <Favorites
                favorites={[
                    { name: 'IDX Google', link: 'https://idx.google.com' },
                    { name: 'Figma', link: 'https://figma.com' },
                    { name: 'Corel Vector', link: 'https://app.corelvector.com' },
                ]}
            />

            <Text>{alert}</Text>
            <View style={[{ flexDirection: 'row' }, styles.input]}>
                <TextInput
                    placeholder="https://google.com/search?q=teste"
                    onChangeText={url => setUrl(url)}
                    defaultValue="https://"
                    showSoftInputOnFocus={false}
                    style={{ width: '80%' }}
                />
                <ButtonSearch
                    onPress={() => {
                        if (validator.isURL(url)) {
                            navigation.navigate('Page', { url });
                        } else {
                            setAlert('Url invalida');
                        }
                    }}
                    $width="20%"
                >
                    <Feather name="search" size={18} color="black" />
                </ButtonSearch>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
    },
    input: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        width: '100%',
        height: 55,
        paddingLeft: 10,
        marginRight: 2,
    },
});
