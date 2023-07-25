import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../assets/Colors/Colors';

const Divider = () => {
    return <View style={styles.divider} />;
  };
  const styles = StyleSheet.create({
   
  
    divider: {
      height: 1,
      backgroundColor: Colors.primary,
      marginHorizontal: 30,
      paddingVertical: 1.1, 
    },
  });


  export default Divider;