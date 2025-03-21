import { Slot } from "expo-router";
import "../styles/global.css"; // Se estiver usando algum arquivo CSS global
import { StatusBar, Text, View } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
export default function Layout() {
    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

    if (!fontsLoaded) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text>Carregando...</Text>
            </View>
        );
    }
    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Slot />
        </>
    );
}
