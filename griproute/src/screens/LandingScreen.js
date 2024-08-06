import React from 'react';
import { Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackgroundImageComponent from '../components/BackgroundImage';

const LandingScreen = () => {
  const navigation = useNavigation();

  return (
    <BackgroundImageComponent>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.touchableArea} onPress={() => navigation.navigate('Main')}>
        {/* <TouchableOpacity style={styles.touchableArea}> */}
          <View style={styles.centerContent}>
            <Image source={require('../../assets/gp_color_white.png')} style={styles.logoImage} />
            <Text style={styles.welcomeText}>GripRoute</Text>
            <Text style={styles.designedByText}>Desarrollado por</Text>
          <Text style={styles.designedByText}>Ascendify Solutions</Text>
          <Image source={require('../../assets/as_color.png')} style={styles.companyLogo} />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </BackgroundImageComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'black',
    fontSize: 40,
    fontFamily: 'FiraSans-Bold',
    textAlign: 'center',
    marginTop: 20,
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  designedByText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Helvetica-Regular',
    textAlign: 'center',
    marginBottom: 5,
  },
  companyLogo: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
    marginTop: 10,
  },
  touchableArea: {
    flex: 1,
  }
});

export default LandingScreen;
