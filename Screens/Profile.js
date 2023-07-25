import React from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';
import Colors from '../assets/Colors/Colors';
import FormContainer from './FormContainer';

const Profile = () => {
  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer} />    
      <View style={styles.formContainer}>
        <FormContainer onSubmit={handleFormSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backContainer: {
    flex: 1,
    backgroundColor: Colors.primary, 
  },
  formContainer: {
    position: 'absolute',
    top: '2%', 
    left: 0,
    right: 0,
    bottom:1,    
    backgroundColor: 'transparent', 
    paddingHorizontal: 1,    
    zIndex: 1, 
  },
});

export default Profile;
