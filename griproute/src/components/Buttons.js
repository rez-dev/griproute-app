import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';

const Buttons = ({onPress, text}) => {
  // let [fontsLoaded] = useFonts({
  //   'FiraSans-Regular': require('../assets/fonts/FiraSans-Regular.ttf'),
  //   'FiraSans-Bold': require('../assets/fonts/FiraSans-Bold.ttf'),
  // });

  // if (!fontsLoaded) {
  //   return <View style={styles.container}><Text>Loading Fonts...</Text></View>;
  // }
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.buttonGreen} onPress={() => console.log('Iniciar Sesión')}> */}
      <TouchableOpacity style={styles.buttonGreen} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  buttonGreen: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 10,
    shadowColor: "#000",  // Color de la sombra
    shadowOffset: { width: 0, height: 2 },  // Dirección y distancia de la sombra
    shadowOpacity: 0.25,  // Opacidad de la sombra
    shadowRadius: 3.84,  // Desenfoque de la sombra
    elevation: 5,  // Elevación para Android
  },
  buttonOrange: {
    backgroundColor: '#FF9500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'FiraSans-Bold',
  }
});

export default Buttons;
