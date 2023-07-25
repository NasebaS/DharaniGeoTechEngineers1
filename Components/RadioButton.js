// RadioButton.js

import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default function RadioButton({ label, selected, color, onPress }) {
  const radioButtonStyle = {
    borderColor: color || '#ccc', // Default color is grey if the color prop is not provided
    backgroundColor: selected ? (color || '#ccc') : 'transparent', // Use color if selected, else transparent
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.radioButton, radioButtonStyle]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioButton: { //added colors
    width: 15,
    height: 15,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginRight: 10,
  },
  radioSelected: {
    borderColor: '#007AFF',
  },
  label: {
    fontSize: 16,
  },
});
