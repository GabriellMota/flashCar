import React from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from '../components/button';

export default function Index() {
    return (
        <View className="flex-1">
            <Image
                className="absolute w-full h-full"
                source={require('../assets/background.png')}
                resizeMode="cover"
            />
            <View className='flex-1 justify-center p-6 gap-14'>
                <View>
                    <Text className='text-4xl text-COLORS-BRAND_MID font-bold'>Flash Car</Text>
                    <Text className='text-xl text-white font-semibold opacity-50'>Venha dirigir com um aplicativo de cofiança</Text>
                </View>
                <Button title='Entrar com conta Google' />
            </View>
        </View>
    );
}
