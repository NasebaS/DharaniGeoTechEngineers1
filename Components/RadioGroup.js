// RadioGroup.js

import React from 'react';
import { StyleSheet, View } from 'react-native';
import RadioButton from '../Components/RadioButton';

export default function RadioGroup({ containerStyle, layout = 'column', onPress, radioButtons, selectedId, testID }) {
  function handlePress(id) {
    if (id !== selectedId && onPress) {
      onPress(id);
    }
  }

  return (
    <View style={[styles.container, { flexDirection: layout }, containerStyle]} testID={testID}>
      {radioButtons.map((button) => (
        <RadioButton
          key={button.id}
          label={button.label}
          selected={button.id === selectedId}
          onPress={() => handlePress(button.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
