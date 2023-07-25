import { Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import React,{useState} from 'react'
import {  DrawerContentScrollView } from '@react-navigation/drawer';
import ActiveIndicator from '../Components/ActiveIndicator';
import Divider from '../Components/Divider'
import DrawerHeader from '../Components/DrawerHeader';
import DrawerData from '../assets/DrawerData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../assets/Colors/Colors';



function CustomDrawerContent({ navigation }) {
    const [activeItem, setActiveItem] = useState('');
    
  
    const handlePress = (item) => {
      setActiveItem(item);
      navigation.navigate(item);
    };
    
  
    const renderDrawerItem = (item, iconName) => {
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
    }
  
    return (
      
      <DrawerContentScrollView
      style={styles.drawerContainer} // Apply the custom style with rounded corners
    >
        <DrawerHeader navigation={navigation} />
        <Divider/>
        {DrawerData.map((item) => renderDrawerItem(item.name, item.iconName))}
        </DrawerContentScrollView>
    );
  }

export default CustomDrawerContent

const styles = StyleSheet.create({
    drawerWrapper: {
      flex: 1,
      // borderRadius: 10, // Set the borderRadius to the desired value
      overflow: 'hidden', // This ensures that the rounded corners are applied correctly
    },
    drawerContainer: {
      flex: 1, 
      // backgroundColor: '#008080',
      // borderRadius: 10,
      // overflow: 'hidden',
      
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    drawerHeader: {
     
      paddingVertical: 20,
      paddingHorizontal: 15,
      flexDirection:'row',
      justifyContent:'center',
     
      
    },
    // drawerBottomRadius: {
    //   position: 'absolute',
    //   bottom: 0,
    //   right: 0,
    //   width: 10,
    //   height: 10,
    //   borderBottomRightRadius: 10,
    //   borderTopRightRadius:5,
    //   backgroundColor: '#333',
    // },
    maskContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      overflow: 'hidden',
    },
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
    drawerItemIconInactive: {
      color: '#666', // Change to the desired inactive color
    },
    drawerItemLabelInactive: {
      color: '#666', // Change to the desired inactive color
      borderRadius: 5,
      paddingVertical: 8,
    },
    logoImage: {
      width: Dimensions.get('window').width * 0.3,
      height: Dimensions.get('window').width * 0.3,
      resizeMode: 'contain',
      borderRadius: 20,
      left:30
  
    },
    companyName:{
      
      fontSize: 18,
      color: '#fff',
   
      fontFamily: 'Alice-Regular',
    },
    headerIconContainer: {
      marginRight: 50,
      left:70,
      flexDirection:'column',
      justifyContent:'space-between',
     
    },
    logoImageContainer: {
      marginLeft: 15,
    },
    logoutIcon:{
  backgroundColor:Colors.primary,
  paddingHorizontal:7,
  paddingVertical:7,
  color:'#fff',
  borderRadius:5,
  
    },
    editIcon:{
      // backgroundColor:'#0E5583',
      // paddingHorizontal:7,
      // paddingVertical:7,
      color:'#000',
      borderRadius:10,
      top:80,
      left:30,
      height:20,
      width:20
  
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 3.84,
      elevation: 10,
    },
    drawerStyle: {
      top:5  // Set the background color of the drawer to transparent
    },
    
  });
  