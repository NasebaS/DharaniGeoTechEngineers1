import React from 'react';
import { View, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import materialRequestData from '../assets/MaterialRequestData';
import MaterialRequestContainer from './MaterialRequestContainer';
import Colors from '../assets/Colors/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MaterialRequest = ({navigation}) => {

  const handleAddPress=()=>{
    navigation.navigate('Edit Material Request')
    }
  return (
    <View style={styles.container}>
      <FlatList
        data={materialRequestData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MaterialRequestContainer request={item} />}
      />
      <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => handleAddPress()}
      activeOpacity={0.8}
    >
      <AntDesign name="pluscircleo" size={24} color="#fff" />
    </TouchableOpacity>
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
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#FF0060',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.3, 
    shadowOffset: { width: 0, height: 2 }, 
  },
});

export default MaterialRequest;
