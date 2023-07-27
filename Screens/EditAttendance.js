import { StyleSheet, Text, TouchableOpacity, View,ScrollView,Animated} from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Colors from '../assets/Colors/Colors';
const EditAttendance = () => {
 
const navigation=useNavigation()


  const AttendanceData=[
     
    {
      "date": "21-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "22-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 45,
      "absentEmployees": 3,
      "halfDayEmployees": 2
    },
    {
      "date": "23-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "24-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "25-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "26-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "27-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "28-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "29-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "30-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "31-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },

    {
      "date": "1-08-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "21-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "21-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "21-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "21-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "21-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    }, {
      "date": "21-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    }, {
      "date": "21-07-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
    {
      "date": "2-08-2023",
      "totalEmployees": 50,
      "presentEmployees": 35,
      "absentEmployees": 8,
      "halfDayEmployees": 7
    },
  ]
  
  
  const handleEditPress=()=>{
navigation.navigate('Attendance entry')
  }
   const handleAddPress=()=>{
    navigation.navigate('Attendance entry')
  }
  const getStatusBackgroundColor = (status) => {
    switch (status) {
      case 'Present':
        return '#D0F0C0'; // Light green
      case 'Absent':
        return '#F0C0C0'; // Light red
      case 'Half Day':
        return '#F0E0C0'; // Light yellow
      default:
        return '#fff'; // Default background color for other statuses
    }
  };
 
  return (
    
    <View style={styles.container}>
      <View style={styles.bluecontainer} />
      <View style={styles.backContainer}>
       <ScrollView contentContainerStyle={styles.scrollContainer}
      >
           
      
        {AttendanceData.map((data, index) => (
          <Animated.View
          key={index}
          style={ styles.itemContainer}
        >
            <View style={styles.iconsContainer}>
              <TouchableOpacity onPress={() => handleEditPress()} activeOpacity={0.7}>
                <AntDesign name="edit" size={24} style={styles.editIcon} />
              </TouchableOpacity>
              
            </View>
            <View style={styles.dataContainer}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateText}>Date: {data.date}</Text>
              </View>
              <View style={styles.countsContainer}>
              <View style={[styles.countBackground, { backgroundColor: getStatusBackgroundColor('Total') }]}>
                <Text style={[styles.countText, { color: 'black' }]}>Total: {data.totalEmployees}</Text>
              </View>
              <View style={[styles.countBackground, { backgroundColor: getStatusBackgroundColor('Present') }]}>
                <Text style={[styles.countText, { color: 'green' }]}>P: {data.presentEmployees}</Text>
              </View>
              <View style={[styles.countBackground, { backgroundColor: getStatusBackgroundColor('Absent') }]}>
                <Text style={[styles.countText, { color: 'red' }]}>A: {data.absentEmployees}</Text>
              </View>
              <View style={[styles.countBackground, { backgroundColor: getStatusBackgroundColor('Half Day') }]}>
                <Text style={[styles.countText, { color: 'grey' }]}>HD: {data.halfDayEmployees}</Text>
              </View>
              </View>
            </View>
            </Animated.View>
        ))}
      
      </ScrollView>
      </View>
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
    backgroundColor: '#ccc',
    
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  bluecontainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 100, 
    backgroundColor: Colors.primary,
    
  
  },
  backContainer:{
    position: 'relative',
 borderRadius:20,
 top:50,


  },
 
  countBackground: {
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  countText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: '10%',    
    top:50,
    borderRadius:8
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 15,
    width: '90%',
      shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 60,
  },
  editIcon: {
    marginRight: 8,
    backgroundColor: Colors.primary,
    fontSize:20,
    color:"#fff",
    borderRadius:20,
    paddingHorizontal:10,
    paddingVertical:10,
    fontWeight:"bold",
    
    
  },
  addIcon: {
    color: 'green',
  },
  dataContainer: {
    flex: 1,
    paddingLeft: 16,
  },
  dateContainer: {
    marginBottom: 8,
    right:20
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  countsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:5,
    paddingVertical:2
  },
  
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: Colors.primary,
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
export default EditAttendance;