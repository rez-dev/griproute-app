// src/components/Card.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

// Componente Card que acepta children para personalizar el contenido
const Card = ({ children }) => {
  return (
    <View style={styles.card}>
        {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 300, // Ancho ajustado según las necesidades de diseño
    height: 200, // Altura ajustada según las necesidades de diseño
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para sombra en Android
    marginBottom: 16,
    overflow: 'hidden',
  }
});

export default Card;
