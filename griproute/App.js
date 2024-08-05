// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import { useFonts } from 'expo-font';
import { View, Text, Platform} from 'react-native';
import MenuScreen from './src/screens/MenuScreen';
import CameraScreen from './src/screens/CameraScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
// import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';
import Entypo from '@expo/vector-icons/Entypo';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import ForumScreen from './src/screens/ForumScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfileScreen from './src/screens/ProfileScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import Ionicons from '@expo/vector-icons/Ionicons';

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

  const Tab = createBottomTabNavigator();
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      elevation: 0,
      background: '#ffffff',
      height: 80,
    }
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name='Camera' component={CameraScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="Inicio" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({focused}) => {
          return (
            <View style={{alignItems: "center", justifyContent: "center"}}>
              {/* <Entypo name="home" size={24} color={focused ? "#427800" : "#748c94"} /> */}
              <Entypo name="home" size={30} color={focused ? "#427800" : "#748c94"}/>
              {/* <Text style={{color: focused ? "#427800" : "#748c94", fontFamily: "Helvetica-Regular"}}>Inicio</Text> */}
            </View>
          )
        }}}/>
        <Tab.Screen name="Foro" component={ForumScreen} options={{tabBarIcon: ({focused}) => {
          return (
            <View style={{alignItems: "center", justifyContent: "center"}}>
              {/* <Entypo name="home" size={24} color={focused ? "#427800" : "#748c94"} /> */}
              <Ionicons name="people" size={30} color={focused ? "#427800" : "#748c94"}/>
              {/* <SimpleLineIcons name="menu" size={24} color={focused ? "#427800" : "#748c94"}/> */}
              {/* <Text style={{color: focused ? "#427800" : "#748c94", fontFamily: "Helvetica-Regular"}}>Menú</Text> */}
            </View>
          )
        }}}/>
        <Tab.Screen name="Fotografiar" component={CameraScreen} 
          options={{tabBarIcon: ({focused}) => {
            return (
              <View style={{
                alignItems: "center", 
                justifyContent: "center", 
                backgroundColor: "#427800", 
                top: Platform.OS == "ios" ? -10 : -20,
                width: Platform.OS == "ios" ? 50: 60,
                height: Platform.OS == "ios" ? 50 : 60,
                borderRadius: Platform.OS == "ios" ? 25:30 }}>
                {/* <Entypo name="home" size={24} color={focused ? "#427800" : "#748c94"} /> */}
                <Entypo name="camera" size={30} color={focused ? "#427800" : "#ffff"}/>
              </View>
            )
        }}}/>
        <Tab.Screen name="Menú" component={MenuScreen} options={{tabBarIcon: ({focused}) => {
          return (
            <View style={{alignItems: "center", justifyContent: "center"}}>
              {/* <Entypo name="home" size={24} color={focused ? "#427800" : "#748c94"} /> */}
              <MaterialIcons name="insert-photo" size={30} color={focused ? "#427800" : "#748c94"}/>
              {/* <Text style={{color: focused ? "#427800" : "#748c94", fontFamily: "Helvetica-Regular"}}>Menú</Text> */}
            </View>
          )
        }}}/>
        <Tab.Screen name="Perfil" component={ProfileScreen} options={{tabBarIcon: ({focused}) => {
          return (
            <View style={{alignItems: "center", justifyContent: "center"}}>
              {/* <Entypo name="home" size={24} color={focused ? "#427800" : "#748c94"} /> */}
              <Ionicons name="person" size={24} color={focused ? "#427800" : "#748c94"}/>
              {/* <SimpleLineIcons name="menu" size={24} color={focused ? "#427800" : "#748c94"}/> */}
              {/* <Text style={{color: focused ? "#427800" : "#748c94", fontFamily: "Helvetica-Regular"}}>Menú</Text> */}
            </View>
          )
        }}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
