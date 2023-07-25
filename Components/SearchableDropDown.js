import React, { useState } from 'react';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const data = [
    { id: 1, name: 'Cement' },
    { id: 2, name: 'Steel' },
    { id: 3, name: 'Bricks' },
    { id: 4, name: 'Sand' },
    { id: 5, name: 'Concrete Blocks' },
    { id: 6, name: 'Plywood' },
    // Add more materials as needed
  ];
  const quantities = [
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 4, value: '4' },
    // Add more quantities as needed
  ];
  

const SearchableDropDown = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

     const [showItems, setShowItems] = useState(false);

   const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios'); // Show the date picker on iOS only
    setSelectedDate(selectedDate || selectedDate);
  };
  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return formattedDate;
  };
    const onItemSelect = (item) => {
      setSelectedItems((prevItems) => [...prevItems, item]);
    };
    const deleteItem = (itemId) => {
      setSelectedItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };
    const renderSelectedItem = ({ item }) => (
      <View style={styles.tableRow}>
        <Text style={styles.tableCell}>{item.name}</Text>
        <Text style={styles.tableCell}>{item.name}</Text>
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Icon name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
      const onQuantitySelect = (item) => {
        setSelectedItems((prevItems) => [...prevItems, item]);
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

      {/*Product and Quantity DropDown*/}
      <View style={styles.dropdownRowContainer}>
      <View style={styles.dropdownWrapper}>
        
        <View style={styles.dropdownContainer}>
            
        <SearchableDropdown
          onTextChange={(text) => console.log(text)} // You can use this to implement custom search logic if needed
          onItemSelect={onItemSelect}
          containerStyle={{ padding: 10,width:'80%' }}
          textInputStyle={{
            padding: 12,
            borderWidth: 2,
            borderColor: '#42a5f5', // Your desired border color
  borderRadius: 5,
  backgroundColor: '#fff',
  color: '#42a5f5', // Color of the selected item text
  fontWeight: 'bold',
  fontSize: 16,
  padding: 12,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 20, // Adjust the radius as needed
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5, // Add elevation for Android shadow effect
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            borderRadius: 10,
            backgroundColor: '#f7f7f7',
            borderColor: '#bbb',
            borderWidth: 1,
          
          }}
          itemTextStyle={{ color: '#222',fontWeight:'bold' }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={data}
          defaultIndex={0}
          placeholder="Select the Product"
          resetValue={false}
          underlineColorAndroid="transparent"
        />
          <View style={styles.dropdownWrapper}>
         <SearchableDropdown
          onTextChange={(text) => console.log(text)} // You can use this to implement custom search logic if needed
          onItemSelect={onQuantitySelect}
          containerStyle={{ padding: 10,width:'20%' }}
          textInputStyle={{
            padding: 12,
            borderWidth: 2,
            borderColor: '#42a5f5', // Your desired border color
  borderRadius: 5,
  backgroundColor: '#fff',
  color: '#42a5f5', // Color of the selected item text
  fontWeight: 'bold',
  fontSize: 16,
  padding: 12,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 20, // Adjust the radius as needed
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5, // Add elevation for Android shadow effect
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            borderRadius: 10,
            backgroundColor: '#f7f7f7',
            borderColor: '#bbb',
            borderWidth: 1,
          
          }}
          itemTextStyle={{ color: '#222',fontWeight:'bold',alignItems:'center' }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={quantities}
          defaultIndex={0}
          placeholder="Q"
          resetValue={false}
          underlineColorAndroid="transparent"
        />
        
</View></View></View></View>
{selectedItem && selectedQuantity && (
          <View style={styles.productQuantityContainer}>
            <Text style={styles.productQuantityText}>Selected Product:</Text>
            <Text style={styles.productQuantityValue}>{selectedItem.name}</Text>
            <Text style={styles.productQuantityText}>Selected Quantity:</Text>
            <Text style={styles.productQuantityValue}>{selectedQuantity.value}</Text>
          </View>
        )}
        </View>
      </View>
    );
  };
  
  export default SearchableDropDown;

  const styles = StyleSheet.create({
    
  dropdownRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownWrapper: {
    width: '100%', // Adjust this value to control the width of each dropdown
  },
    container: {
        flex: 1,    
        backgroundColor:'#ccc',
       
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
        paddingHorizontal: 10,
        borderRadius:20,
        flex: 1,
        
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
      datePickerText: {
        fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      },
      dropdownContainer:{
        flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
//   paddingVertical: 1,
//   paddingHorizontal: 30,
//   borderWidth: 2,
//   borderColor: '#42a5f5',
//   borderRadius: 5,
//   backgroundColor: '#fff',
      },
      selectOptionText: {
        fontSize: 20,
        marginBottom: 10,
        color: '#333',
        fontWeight: 'bold',
      },
      selectedOptionContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      selectedOptionText: {
        fontSize: 16,
        color: '#333',
      },
      selectedOptionName: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
      }, productQuantityValue: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
      },
  
  })
  