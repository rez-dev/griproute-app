// BackgroundImageComponent.js
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const BackgroundImageComponent = ({ children, imageSource }) => {
  return (
    <ImageBackground
      source={imageSource || require('../../assets/blob-scene-haikei.png')} // Usa una imagen por defecto o la proporcionada
      style={styles.background}
      resizeMode="cover" // Ajusta según tus necesidades
    >
      <View style={styles.overlay}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ocupa todo el espacio disponible
    width: '100%', // Asegura que ocupe el ancho completo de la pantalla
    height: '100%', // Asegura que ocupe el alto completo de la pantalla
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1, // Asegura que el contenido también ocupe todo el espacio
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackgroundImageComponent;
