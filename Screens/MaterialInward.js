import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import materialInwardData from '../assets/MaterialInwardData';
import MaterialInwardContainer from './MaterialInwardContainer';
import Colors from '../assets/Colors/Colors';

const MaterialInward = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={materialInwardData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MaterialInwardContainer request={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.primary,
    paddingVertical:15,
    paddingHorizontal:2
  },
});

export default MaterialInward;
