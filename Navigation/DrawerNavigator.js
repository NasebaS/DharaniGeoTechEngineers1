import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import Colors from '../assets/Colors/Colors';
import Logout from '../Screens/Logout';
import Profile from '../Screens/Profile';
import Dashboard from '../Screens/Dashboard';
import AttendanceEntry from '../Screens/AttendanceEntry';
import EditAttendance from '../Screens/EditAttendance';
import MaterialInward from '../Screens/MaterialInward';
import MaterialRequest from '../Screens/MaterialRequest';
import ExpenseReport from '../Screens/ExpenseReport';
import ExpenseEntry from '../Screens/ExpenseEntry';
import DPREntry from '../Screens/DPREntry';
import DPRReport from '../Screens/DPRReport';
import PityCashentry from '../Screens/PityCashentry';
import CustomDrawerContent from '../Components/CustomDrawerContent';
import IndividualAttendanceEntry from '../Screens/IndividualAttendanceEntry';

const Drawer = createDrawerNavigator();
const windowWidth = Dimensions.get('window').width;

function Main() {
 
  return (
    <View style={styles.drawerWrapper}>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: '#fff', // Optional, to set the color of the header text/icons
      }}
      drawerStyle={styles.drawerStyle}
      >
         
        <Drawer.Screen name="Logout " component={Logout} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Attendance entry" component={AttendanceEntry} />
        <Drawer.Screen name="Edit Attendance" component={EditAttendance} />
        <Drawer.Screen name="Material request" component={MaterialRequest} />
        <Drawer.Screen name="Material Inward" component={MaterialInward} />
        <Drawer.Screen name="Expense entry" component={ExpenseEntry} />
        <Drawer.Screen name="DPR Entry" component={DPREntry} />
        <Drawer.Screen name="DPR Report" component={DPRReport} />
        <Drawer.Screen name="Expense report" component={ExpenseReport} />
        <Drawer.Screen name="Pity cash entry" component={PityCashentry} />            
      </Drawer.Navigator>
      </View>
  );
}

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

export default Main;