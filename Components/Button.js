import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../assets/Colors/Colors';

const Button = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress} activeOpacity={0.7}>
      <AntDesign name={iconName} size={24} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
//     paddingHorizontal:7,
// paddingVertical:7,
  },
  icon: {
    color:Colors.primary
  },
});

export default Button;
