// HomeScreen.js
import React from 'react';
import { Text, Image } from 'react-native';
import GradientBackground from '../components/GradientBackground';  // Importa el componente Background
import { StyleSheet } from 'react-native';
import Card from '../components/Card';

const HomeScreen = () => {
  return (
    <GradientBackground>
      {/* <Card> */}
        <Image source={require('../../assets/logo_gr_black_color.png')} style={styles.logoImage} />
        {/* <Text style={styles.welcomeText}>GripRoute</Text> */}
        <Text style={styles.welcomeText2}>GripRoute</Text>
      {/* </Card> */}
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
  },
  welcomeText2: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'FiraSans-Bold',
    textAlign: 'center',
  },
  logoImage: {
    width: 200,
    height: 200, // Para redondear la imagen igual que la sombra
  }
});

export default HomeScreen;
