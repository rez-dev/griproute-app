import React from 'react';
import { Text, Image, View, SafeAreaView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import BackgroundImageComponent from '../components/BackgroundImage';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';
import { usePhotoContext } from '../../PhotoContext';

const { width } = Dimensions.get('window');
const imageSize = width / 3 - 4; // 3 images per row with 2px spacing

const ForumScreen = () => {
  // const navigation = useNavigation();
  const { photos } = usePhotoContext();

  const renderPhoto = ({ item }) => (
    <Image source={{ uri: item.uri }} style={styles.image} />
  );
  
  return (
    <BackgroundImageComponent>
      <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}>
        <FlatList
          data={photos}
          renderItem={renderPhoto}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
        />
      </View> */}
      <Text style={styles.title}>FORO</Text>
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
    justifyContent: 'flex-start', // Start content from the top
    alignItems: 'center',
    paddingHorizontal: 16, // Adds padding on the sides of the screen
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
  },
  image: {
    width: imageSize,
    height: imageSize,
    margin: 1,
  },
  title: {
    fontFamily: 'FiraSans-Bold',
    fontSize: 16,
    color: '#000', // Text color for better visibility
    marginTop: 20, // Adds space from the top of the screen
    marginBottom: 20, // Adds space below the title
    textShadowColor: '#000', // Shadow color
    textShadowOffset: { width: 0, height: 2 }, // Offset of the shadow
    textShadowRadius: 3, // Blur radius of the shadow
  },
});

export default ForumScreen;