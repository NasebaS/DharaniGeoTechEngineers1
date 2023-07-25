import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../assets/Colors/Colors';

const ActiveIndicator = () => {
  return <View style={styles.activeIndicator} />;
};

const styles = StyleSheet.create({
  activeIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 8, // Adjust the width to your preference
    backgroundColor: Colors.primary, // Change the color to your preferred highlight color
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 2, // Adjust the height to your preference
    width: '100%', // Extend the underline to the full width of the menu item
    backgroundColor: Colors.primary, // Change the color to your preferred highlight color
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.primary, // Change the color to your preferred highlight color
  },
  circle: {
    position: 'absolute',
    top: '50%', // Position the circle in the center of the menu item vertically
    right: 10, // Adjust the distance from the menu item horizontally
    width: 10, // Adjust the width and height to your preference to form a circle
    height: 10,
    borderRadius: 5, // Half of the width and height to form a circle
    backgroundColor: Colors.primary, // Change the color to your preferred highlight color
    transform: [{ translateY: -5 }], // Adjust the translateY to center the circle vertically
    
  },
  

});

export default ActiveIndicator;
