import React, { useState, useRef } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';
import Buttons from '../components/Buttons';
import { usePhotoContext } from '../../PhotoContext';

export default function CameraScreen() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);
  const { addPhoto } = usePhotoContext();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.designedByText}>Necesitamos tu permiso para acceder a la cámara</Text>
        <Buttons onPress={requestPermission} text={"Conceder permisos"}/>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePhoto() {
    if (cameraRef.current) {
      try {
        const options = { quality: 1, base64: false };
        const newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
        addPhoto(newPhoto); // Add the new photo to the context
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
  }

  function resetPhoto() {
    setPhoto(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      {photo ? (
        <View style={styles.photoContainer}>
          <Image source={{ uri: photo.uri }} style={styles.photo} />
          <View style={styles.resetButtonContainer}>
            <TouchableOpacity style={styles.resetButton} onPress={resetPhoto}>
              <Text style={styles.resetButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <CameraView 
          style={styles.camera} 
          facing={facing}
          ref={cameraRef}
        >
          <View style={styles.topButtonContainer}>
            <TouchableOpacity style={styles.circularButton} onPress={toggleCameraFacing}>
              <Text style={styles.circularButtonText}>XD</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
              <View style={styles.captureButtonInner} />
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  designedByText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Helvetica-Regular',
    textAlign: 'center',
    marginBottom: 5,
  },
  topButtonContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    alignItems: 'center',
    zIndex: 1,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: '15%', // Adjusted from a fixed value to a percentage
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  circularButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
  },
  photoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  resetButtonContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 2,
  },
  resetButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});