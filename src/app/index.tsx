import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { Button } from '../components/button';

import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { WEB_CLIENT_ID, IOS_CLIENT_ID } from '@env';

//aqui nesse GoogleSignin.configure() é onde vou colocar as credenciais do meu app que vou usar q definir no escope do google
GoogleSignin.configure({
    scopes: ['email', 'profile'],
    webClientId: WEB_CLIENT_ID, // esse é o id do cliente web que eu peguei no google cloud e coloquei nas variaveis de ambiente
    iosClientId: IOS_CLIENT_ID
})




export default function Index() {
    const [isAuthenticating, setIsAuthenticating] = useState(false); //saber quando o usuario ta autenticando pra eu colocar o loading no botao


    async function handleGoogleSignIn() {
        try {
            setIsAuthenticating(true);

            const response = await GoogleSignin.signIn();
            console.log('Login com Google:', response);
        } catch (error) {
            console.log(error);
            setIsAuthenticating(false);
        }
    }
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
                <Button title='Entrar com conta Google' isLoadign={isAuthenticating} onPress={handleGoogleSignIn} />
            </View>
        </View>
    );
}
