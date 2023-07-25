// DrawerItem.js
import React from 'react';
import { TouchableOpacity, Text,StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ActiveIndicator from '../Components/ActiveIndicator';
import Colors from './Colors/Colors';

const DrawerRenderItem = (item, iconName, activeItem, handlePress) => {
  const isActive = activeItem === item;

  return (
    <TouchableOpacity
      key={item}
      style={styles.drawerItem}
      onPress={() => handlePress(item)}
      activeOpacity={0.1}
    >
      <AntDesign
        name={iconName}
        size={24}
        style={[styles.drawerItemIcon, isActive && styles.drawerItemIconActive]}
      />
      <Text style={[styles.drawerItemLabel, isActive && styles.drawerItemLabelActive]}>{item}</Text>
      {isActive && <ActiveIndicator />}
    </TouchableOpacity>
  );
};

export default DrawerRenderItem; 
const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    paddingTop:20
  },
  drawerItemIcon: {
    marginLeft: 10,
    color: '#666',
  },
  drawerItemIconActive: {
    color: Colors.primary,
 
  },
  drawerItemLabel: {
    
    marginLeft: 25,
    fontSize: 18,
    color: '#666',
    // fontFamily: 'Alice-Bold',
    fontFamily: 'CrimsonText-Bold',
  },
  
  drawerItemLabelActive: {
    color: Colors.primary,
    borderRadius: 5,
    
    paddingVertical:8,
   
    
  },

})