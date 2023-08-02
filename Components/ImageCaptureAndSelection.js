import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Image, PermissionsAndroid } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ImageCaptureAndSelection = () => {
  const [cameraPhoto, setCameraPhoto] = useState('');

  const options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openCamera = async () => {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      if (permission === PermissionsAndroid.RESULTS.GRANTED) {
        const result = await launchCamera(options);
        if (!result.didCancel) {
          setCameraPhoto(result.assets[0].uri);
        }
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.error('Error opening camera:', error);
    }
  };
  

  const openGallery = async () => {
    try {
      const result = await launchImageLibrary(options);
      if (!result.didCancel) {
        setCameraPhoto(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error opening gallery:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity  style={styles.button} onPress={openCamera}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
      {cameraPhoto !== '' && <Image source={{ uri: cameraPhoto }} style={styles.image} />}
      <TouchableOpacity style={styles.button} onPress={openGallery}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default ImageCaptureAndSelection;
