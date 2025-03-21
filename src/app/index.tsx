import React from 'react';
import { View, Image } from 'react-native';

export default function Index() {
    return (
        <View className="flex-1 bg-black justify-center items-center">
            <Image
                className="absolute w-full h-full"
                source={require('../assets/background.png')}
                resizeMode="cover"
            />
        </View>
    );
}
