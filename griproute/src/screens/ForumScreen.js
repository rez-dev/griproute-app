import React from 'react';
import { Text, Image, View, SafeAreaView, TouchableOpacity } from 'react-native';
import BackgroundImageComponent from '../components/BackgroundImage';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';

const ForumScreen = () => {
  const navigation = useNavigation();
  
  return (
    <BackgroundImageComponent>
      <SafeAreaView style={styles.container}>
          <Card>
            <Text style={{fontFamily: 'Helvetica-Regular', fontSize: 40}}>Post</Text>
          </Card>
          <Card>
            <Text style={{fontFamily: 'Helvetica-Regular', fontSize: 40}}>Post</Text>
          </Card>
      </SafeAreaView>
    </BackgroundImageComponent>
  );
};

const styles = StyleSheet.create({
  container: {
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
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 50,
    resizeMode: 'contain',
    marginTop: 10,
  }
});

export default ForumScreen;