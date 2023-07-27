import React, { useState } from 'react';
import { View, Text, FlatList,TouchableOpacity, StyleSheet,Platform  } from 'react-native';
import RadioButton from '../Components/RadioButton'; // Custom RadioButton component
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../assets/Colors/Colors';



const AttendanceForm = () => {
  const initialUsersData = [
    { id: 1, name: 'James', attendance: 'Present' },
    { id: 2, name: 'Johnny', attendance: 'Absent' },
    { id: 3, name: 'Robbin', attendance: 'Half Day' },
    { id: 4, name: 'James', attendance: 'Present' },
    { id: 5, name: 'Johnny', attendance: 'Absent' },
    { id: 6, name: 'Robbin', attendance: 'Half Day' },
    { id: 7, name: 'James', attendance: 'Present' },
    { id: 8, name: 'Johnny', attendance: 'Absent' },
    { id: 9, name: 'Robbin', attendance: 'Half Day' },
    { id: 10, name: 'James', attendance: 'Present' },
    { id: 11, name: 'Johnny', attendance: 'Absent' },
    { id: 12, name: 'Robbin', attendance: 'Half Day' },
    { id: 13, name: 'James', attendance: 'Present' },
    { id: 14, name: 'Johnny', attendance: 'Absent' },
    { id: 15, name: 'Robbin', attendance: 'Half Day' },
    { id: 16, name: 'James', attendance: 'Present' },
    { id: 17, name: 'Johnny', attendance: 'Absent' },
    { id: 18, name: 'Robbin', attendance: 'Half Day' },
    // Add more users as needed
  ];
  const [usersData, setUsersData] = useState(initialUsersData);
  // Sample data for the list of users
 
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);


  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios'); // Show the date picker on iOS only
    setSelectedDate(selectedDate || selectedDate);
  };
 
  // Function to handle changes in attendance status
  const handleAttendanceChange = (userId, attendance) => {
    // Handle the logic to update the attendance status for the specific user
    // For simplicity, we will just update the state directly in this example.
    const updatedUsersData = usersData.map((user) =>
      user.id === userId ? { ...user, attendance } : user
    );
    setUsersData(updatedUsersData);
  };
  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return formattedDate;
  };
  const handleSave = () => {
    // Handle the logic to save the attendance data
    // For this example, we will simply log the updated usersData
    console.log('Updated Attendance Data:', usersData);
  };
 
  // Render each row in the FlatList
  const renderRow = ({ item }) => {
  
    return (
      <View style={styles.row}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.radioButtonsContainer}>
          <RadioButton
            
            color={item.attendance === 'Present' ? 'green' : 'grey'}
            selected={item.attendance === 'Present'}
            onPress={() => handleAttendanceChange(item.id, 'Present')}
          />
          <RadioButton
          
          color={item.attendance === 'Absent' ? 'red' : 'grey'}
            selected={item.attendance === 'Absent'}
            onPress={() => handleAttendanceChange(item.id, 'Absent')}
          />
          <RadioButton
           
           color={item.attendance === 'Half Day' ? 'grey' : 'grey'}
            selected={item.attendance === 'Half Day'}
            onPress={() => handleAttendanceChange(item.id, 'Half Day')}
          />
        </View>
        
      </View>
    );
  
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.bluecontainer}/>
      
      <View style={styles.backContainer}>
      
     
       {/* Date Picker */}
       <TouchableOpacity style={styles.datePickerContainer} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.datePickerText}>
        {formatDate(selectedDate)}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={handleDateChange}
        />
      )}
      <View style={styles.formContainer}>
      <View style={styles.header}>
        <Text style={styles.columnName}>Name</Text>
        <Text style={styles.columnName}>Present</Text>
        <Text style={styles.columnName}>Absent</Text>
        <Text style={styles.columnName}>Half Day</Text>
      </View>
      <FlatList
        data={usersData}
        renderItem={renderRow}
        keyExtractor={(item) => item.id.toString()}
      />
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor:'#ccc'
  },
  bluecontainer:{
backgroundColor:Colors.primary,
flex:1,

  },
  backContainer:{
    backgroundColor: '#ccc',
    position:'absolute',
    top:'10%',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius:20,
    
  },
  datePickerContainer: {
    marginTop:10,
    width: '100%',
    top:-80,
    paddingVertical: 10,
    paddingHorizontal: 20,
   
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  formContainer:{
    flex: 1,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    top:-20,
    marginTop: -20,
    // marginBottom: 5,    
    borderWidth: 0.5,
    borderColor: Colors.primary, 
    shadowColor: Colors.primary, 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 3, 
    elevation: 5,
  
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
   
   },
  columnName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: Colors.primary,
    color:'#fff',
    paddingVertical:10,
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 5,
    textTransform: 'capitalize',
  },
  radioButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 2,
 paddingVertical:1,
 paddingHorizontal:0,
 marginLeft: -25,
 top:10
 
  },
  saveButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  datePickerText: {
    fontSize: 18,
  fontWeight: 'bold',
  color: '#333',
  },
  entryIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
 
  
});

export default AttendanceForm;
