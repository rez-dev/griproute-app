import React from 'react';
import { Text, Image, SafeAreaView, FlatList, StyleSheet, View } from 'react-native';
import BackgroundImageComponent from '../components/BackgroundImage';
import CardImage from '../components/CardImage';
import { usePhotoContext } from '../../PhotoContext';

const GalleryScreen = () => {
  const { photos } = usePhotoContext();

  const renderPhoto = ({ item }) => (
    <View style={styles.card}>
      <CardImage>
        <Image source={{ uri: item.uri }} style={styles.image} />
      </CardImage>
    </View>
  );

  return (
    <BackgroundImageComponent>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>GALERÍA</Text>
        <FlatList
          data={photos}
          renderItem={renderPhoto}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1}
          contentContainerStyle={styles.flatListContent}
        />
      </SafeAreaView>
    </BackgroundImageComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Start content from the top
    alignItems: 'center',
    paddingHorizontal: 16, // Adds padding on the sides of the screen
  },
  title: {
    fontFamily: 'FiraSans-Bold',
    fontSize: 24,
    color: '#000', // Text color for better visibility
    marginTop: 20, // Adds space from the top of the screen
    marginBottom: 20, // Adds space below the title
    textShadowColor: '#000', // Shadow color
    textShadowOffset: { width: 0, height: 2 }, // Offset of the shadow
    textShadowRadius: 3, // Blur radius of the shadow
  },
  card: {
    margin: 1, // Margin between cards
    alignItems: 'center', // Center the image horizontally
    justifyContent: 'center', // Center the image vertically
  },
  image: {
    width: '100%', // Scale to fit the width of the card
    height: undefined, // Let the height be determined by the image aspect ratio
    aspectRatio: 9 / 16, // Maintain the aspect ratio for the image
    borderRadius: 12,
  },
  flatListContent: {
    paddingBottom: 20, // Optional padding to ensure content doesn't go all the way to the bottom
  },
});

export default GalleryScreen;
