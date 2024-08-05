import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

// Componente Card que acepta children para personalizar el contenido
const CardImage = ({ children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16, // Radio del borde de la card
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para sombra en Android
    marginBottom: 12, // Ajusta el margen inferior
    overflow: 'hidden',
    maxWidth: 320, // Ajusta el ancho máximo de la card
  },
  imageContainer: {
    padding: 16, // Ajusta el padding para dejar un borde visible alrededor de la imagen
    borderRadius: 12, // Debería ser menor que el borderRadius de la card para que el borde se vea
    backgroundColor: '#fff', // Asegura que el fondo sea visible para el borde
    overflow: 'hidden', // Asegura que la imagen respete el borde redondeado
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12, // Debe coincidir con el borderRadius de imageContainer para esquinas suaves
  },
});

export default CardImage;
