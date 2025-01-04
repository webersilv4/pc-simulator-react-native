import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { Text, TouchableHighlight, View } from 'react-native';
import { Title } from '../styled-components/Texts';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../@types';

interface IProps {
    favorites: Array<{
        name: string;
        link: string;
    }>;
}

export function Favorites(props: IProps) {
    const navigation = useNavigation<propsStack>();

    return (
        <View>
            <Title style={{ marginBottom: 10 }}>Acesso rapido</Title>

            <View style={{ flexDirection: 'row' }}>
                {props.favorites.map((favorite, key) => (
                    <TouchableHighlight
                        onPress={() => {
                            navigation.navigate('Page', { url: favorite.link });
                        }}
                        key={key}
                    >
                        <View
                            key={key}
                            style={{
                                backgroundColor: '#f0ece4',
                                borderColor: '#000000',
                                borderWidth: 1,
                                marginRight: 2,
                                padding: 5,
                                alignItems: 'center',
                                borderRadius: 8,
                            }}
                        >
                            <Entypo name="pin" size={20} color="black" />
                            <Text>{favorite.name}</Text>
                        </View>
                    </TouchableHighlight>
                ))}
            </View>
        </View>
    );
}
