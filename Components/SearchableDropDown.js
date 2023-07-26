import React, { useState } from 'react';
import { View, Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Table from '../Components/Table';

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
    { id: 1, value: 1 },
    { id: 2, value: 2},
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    // Add more quantities as needed
  ];
  

const SearchableDropDown = () => {
    const [selectedItem, setSelectedItem] = useState({});
    const [selectedQuantity, setSelectedQuantity] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedItemsTable, setSelectedItemsTable] = useState([]); 
    

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
    setSelectedItem(item);   
    console.log(item)
  };
    const deleteItem = (itemId) => {
      setSelectedItemsTable((prevItems) => 
      prevItems.filter((item) => item.product.id !== itemId));
    };
 
    const onQuantitySelect = (item) => {
      setSelectedQuantity(item);
      console.log(item)
    
    };
    const onAddToTable = () => {
      if (selectedItem && selectedQuantity) {
        setSelectedItemsTable((prevSelectedItems) => [
          ...prevSelectedItems,
          { product: selectedItem, quantity: selectedQuantity },
        ]);
        setSelectedItem({});
      setSelectedQuantity({});
        console.log(selectedItemsTable)
      }
    };
    const onSave = () => {
      // Implement your save logic here
      // For example, you can save the selected items to a database or perform other actions
      console.log("Save button clicked");
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

      {/*Product  DropDown*/}
      <View style={styles.dropdownRowContainer}>
      <View style={styles.dropdownWrapper}>
        
        <View style={styles.dropdownContainer}>
            
        <SearchableDropdown
          onTextChange={selectedItem} // You can use this to implement custom search logic if needed
          onItemSelect={onItemSelect}
          containerStyle={{ padding: 10,width:'80%' }}
          textInputStyle={{
            padding: 12,
            borderWidth: 2,
            borderColor: '#42a5f5', 
  borderRadius: 8,
  backgroundColor: '#fff',
  color: '#42a5f5', 
  fontWeight: 'bold',
  fontSize: 16,

          }}
          itemStyle={{
            padding: 10,
            marginTop: 0,
            borderRadius: 2,
            backgroundColor: '#f7f7f7',
            borderColor: '#BACDDB',
            borderWidth: 1.5,
          
          }}
          defaultIndex={0}
          selectedItems={selectedItem}
          itemTextStyle={{ color: '#222',fontWeight:'bold' }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={data}
          placeholder="Select the Product"
          resetValue={false}
          underlineColorAndroid="transparent"
        />
          <View style={styles.dropdownWrapper}>
          <View style={styles.quantityInputContainer}>
        <TextInput
          style={styles.quantityInput}
          value={selectedQuantity}
          onChangeText={onQuantitySelect}
          keyboardType="numeric"
          placeholder="Quantity"
        />
        <TouchableOpacity style={styles.addButton} onPress={onAddToTable}>
        <Icon name="add-circle-sharp" size={50} color='#0E5583' />
        </TouchableOpacity>
      </View>
        
</View></View></View></View>
{selectedItemsTable.length > 0 && (
        <Table data={selectedItemsTable} onDeleteItem={deleteItem}  />
      )}
       {/* Save Button */}
       <TouchableOpacity style={styles.saveButton} onPress={onSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
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
    width: '90%', // Adjust this value to control the width of each dropdown
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
        marginTop: 5, 
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
top:-50,
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
      quantityInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 10,
        width: '50%',
        
      },
      quantityInput: {
        flex: 0.7,
        maxHeight: 140,
        borderWidth: 2,
        borderColor: '#42a5f5',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        color: '#42a5f5', 
        fontWeight: 'bold',
        fontSize: 12,
        padding: 10,
        marginTop: 2,
        top:-5
      },
      addButton: {
        marginRight: 30,
        borderRadius: 5,
       
        
      },
      addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },
      saveButton: {
        marginTop: 20,
        paddingVertical: 15,
        backgroundColor: Colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      saveButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
    
  })
  