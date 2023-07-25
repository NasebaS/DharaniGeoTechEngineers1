import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RadioGroup from '../Components/RadioGroup';

const IndividualAttendanceEntry = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [attendanceType, setAttendanceType] = useState('');

  const attendanceOptions = [
    { id: '1', label: 'Present' },
    { id: '2', label: 'Half Day' },
    { id: '3', label: 'Absent' },
  ];

  const handleAddAttendance = () => {
    // Perform any validation checks for the name and date fields if required.
    // Submit the data to your API or perform any other actions.

    // Clear the form after successful submission
    setName('');
    setDate('');
    setAttendanceType('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Attendance</Text>

      {/* TextInput for Name */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter Name"
        />
      </View>

      {/* Date Picker */}
      
      {/* ... Previous code for date picker ... */}

      {/* Radio Buttons Group */}
      <View style={styles.radioGroupContainer}>
        <RadioGroup
          radioButtons={attendanceOptions}
          selectedId={attendanceType}
          onPress={(id) => setAttendanceType(id)}
        />
      </View>

      {/* Add Attendance Button */}
      <Button
        title="Add Attendance"
        onPress={handleAddAttendance}
        disabled={!name || !date || !attendanceType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  radioGroupContainer: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default IndividualAttendanceEntry;
