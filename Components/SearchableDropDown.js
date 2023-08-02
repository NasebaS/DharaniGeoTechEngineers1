import React, { useState } from 'react';
import { View, Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons'; 
import TableComponent from '../Components/MaterialTable';

const data = [
    {  name: 'Cement' },
    {  name: 'Steel' },
    {  name: 'Bricks' },
    {  name: 'Sand' },
    {  name: 'Concrete Blocks' },
    {  name: 'Plywood' },
    
  ];
  
  

const SearchableDropDown = () => {
    const [selectedItem, setSelectedItem] = useState({});
    const [selectedQuantity, setSelectedQuantity] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedItemsTable, setSelectedItemsTable] = useState([]); 
    const [productList, setProductList] = useState([]);
    const [orderNumber, setOrderNumber] = useState('');

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
  // const onItemSelect = (item) => {
  //   setSelectedItem(item);   
  //   console.log(item)
  // };
  const handleRemoveProduct = (id) => {
    setProductList((prevProductList) => prevProductList.filter((product) => product.id !== id));
  };
 
    // const onQuantitySelect = (item) => {
    //   setSelectedQuantity(item);
    //   console.log(item)
    
    // };
    const handleAddProduct = () => {
      if (selectedItem && selectedQuantity.trim() !== '') {
        let newProduct;
        const serializedId = productList.length + 1; 
        // Check if the selected item exists in the data array
        const existingProduct = data.find((product) => product.name === selectedItem.name);
        
        if (existingProduct) {
          newProduct = {
            id: serializedId.toString(),
            name: existingProduct.name,
            quantity: selectedQuantity.trim(),
          };
        } else {
        
          // If the selected item doesn't exist in the data array, add it as a new product
          newProduct = {
            id: serializedId.toString(),
            name: selectedItem.name.trim(),
            quantity: selectedQuantity.trim(),
          };
        }
  
        setProductList((prevProductList) => [...prevProductList, newProduct]);
        setSelectedItem({});
        setSelectedQuantity('');
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
      <View style={styles.dateAndOrderRowContainer}>
      <View style={styles.orderNumberContainer}>
        <Text style={styles.orderNumberText}>Order No:</Text>
        <TextInput
          style={styles.orderNumberInput}
          value={orderNumber}
          onChangeText={setOrderNumber}
          keyboardType="numeric"
          placeholder="Order Number"
        />
      </View>
         {/* Date Picker */}
         <View style={styles.datePickerRowContainer}>
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
</View></View>
      {/*Product  DropDown*/}
      <View style={styles.dropdownRowContainer}>
      <View style={styles.dropdownWrapper}>
        
        <View style={styles.dropdownContainer}>
            
        <SearchableDropdown
          onTextChange={(text) => setSelectedItem({ name: text })} // Set name in selected item
          onItemSelect={(item) => setSelectedItem(item)}
          containerStyle={{ padding: 10, width: '80%' }}
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
          itemTextStyle={{ color: '#222', fontWeight: 'bold' }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={data}
          placeholder="Select the Product or Enter New Product"
          resetValue={false}
          underlineColorAndroid="transparent"
        />
          <View style={styles.dropdownWrapper}>
          <View style={styles.quantityInputContainer}>
          <TextInput
          style={styles.quantityInput}
          value={selectedQuantity}
          onChangeText={setSelectedQuantity}
          keyboardType="numeric"
          placeholder="Quantity"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Icon name="add-circle-sharp" size={50} color='#0E5583' />
        </TouchableOpacity>
      </View>
        
</View>
</View>
</View>
</View>
<TableComponent data={productList} onDeleteItem={handleRemoveProduct} />

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
      dateAndOrderRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
        top:-100,
        alignItems:'center'
      },
      orderNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginRight:5,
        flex: 1,
        marginTop:20
       
      },
      orderNumberText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
        color:'#fff'
      },
      orderNumberInput: {
        // flex: 1,
        borderWidth: 2,
        borderColor: '#42a5f5',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        color: '#42a5f5', 
        fontWeight: 'bold',
        fontSize: 16,
        paddingVertical: 8,
      },
      datePickerRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
        width:250,
        height:50,
        right:-100
      },
      datePickerContainer: {
        flex: 0.5, // Reduce the width of the date picker by adjusting the flex value
    marginRight: 10,
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
top:-90,
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
  