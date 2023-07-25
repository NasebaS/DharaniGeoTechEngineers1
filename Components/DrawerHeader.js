import { View, StyleSheet, TouchableOpacity, Dimensions,Image } from 'react-native';
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../assets/Colors/Colors';

const DrawerHeader = ({ navigation }) => {
    const handleEditPress = () => {
    
        navigation.navigate('Profile');
      };
      const handleLogoutPress=()=>{
      
        navigation.navigate('Login');
      };
  return (
    <View style={styles.drawerHeader}>
      
    <Image source={require('../assets/images/logobg.png')} style={styles.logoImage} />
    <TouchableOpacity onPress={() => handleEditPress()} activeOpacity={0.1} >
        <AntDesign name="edit" size={15}
         style={[styles.editIcon, styles.shadow]}
         />
      </TouchableOpacity>
    {/* <Text style={styles.companyName}>Dharani GeoTech Engineers</Text> */}
    <View style={styles.headerIconContainer}>
      <TouchableOpacity onPress={() => handleLogoutPress()} activeOpacity={0.1}>
        <AntDesign name="logout" size={14} 
        style={[styles.logoutIcon, styles.shadow]}
        />
      </TouchableOpacity>
      
    </View>
  </View>
  )
}

export default DrawerHeader

const styles = StyleSheet.create({
    drawerHeader: {
   
        paddingVertical: 20,
        paddingHorizontal: 15,
        flexDirection:'row',
        justifyContent:'center',
       
        
      }, logoImage: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        resizeMode: 'contain',
        borderRadius: 20,
        left:30
    
      }, editIcon:{
        // backgroundColor:'#0E5583',
        // paddingHorizontal:7,
        // paddingVertical:7,
        color:'#000',
        borderRadius:10,
        top:80,
        left:30,
        height:20,
        width:20
    
      },shadow: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 10,
      }, headerIconContainer: {
        marginRight: 50,
        left:70,
        flexDirection:'column',
        justifyContent:'space-between',
       
      }, logoutIcon:{
        backgroundColor:Colors.primary,
        paddingHorizontal:7,
        paddingVertical:7,
        color:'#fff',
        borderRadius:5,
        
          },
})