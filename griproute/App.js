// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { useFonts } from 'expo-font';
import { View, Text} from 'react-native';
import MenuScreen from './src/screens/MenuScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  // Cargar las fuentes usando el hook useFonts
  const [fontsLoaded] = useFonts({
    'FiraSans-Regular': require('./assets/fonts/FiraSans-Regular.ttf'),
    'FiraSans-Bold': require('./assets/fonts/FiraSans-Bold.ttf'),
    'Helvetica-Regular': require('./assets/fonts/helvetica-rounded-bold-5871d05ead8de.otf'),
    'Helvetica-Bold': require('./assets/fonts/Helvetica-Bold.ttf'),
  });

  // Si las fuentes no están cargadas, muestra un mensaje de carga
  if (!fontsLoaded) {
    return (
      <View >
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
