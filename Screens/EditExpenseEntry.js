import React, { useState,useEffect} from 'react';
import { View, Text,TextInput,StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Colors from '../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import ExpenseTable from '../Components/ExpenseTable'
import { PieChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

const data = [
    { id: 1, name: 'Petrol', amount: 1000 },
    { id: 2, name: 'Diesel', amount: 2000 },
    { id: 3, name: 'Food', amount: 5000 },
    { id: 4, name: 'Groceries', amount: 7000 },
    { id: 5, name: 'Concrete', amount: 12000 },
    { id: 6, name: 'Steel Bars', amount: 15000 },
    { id: 7, name: 'Cement', amount: 8000 },
    { id: 8, name: 'Sand', amount: 4000 },
    { id: 9, name: 'Bricks', amount: 6000 },
    { id: 10, name: 'Electrical Supplies', amount: 3000 },
   
  ];
  
const EditExpenseEntry = () => {
    const [selectedItem, setSelectedItem] = useState({});   
    const [expenses, setExpenses] = useState({});
    const [selectedAmount, setSelectedAmount] = useState({});
    const [selectedItemsTable, setSelectedItemsTable] = useState([]);
    const [additionalDetails, setAdditionalDetails] = useState(''); 
      
    const navigation=useNavigation()
        
          
   
  const onItemSelect = (item) => {
    setSelectedItem(item.name);   
    console.log(item.name)
  };
  const onAmountSelect = (item) => {
    setSelectedAmount(item); 
    console.log(item)
  };
  const GoBack = () => {
    navigation.goBack();
    
  };
  const onSave = () => {
    // Implement your save logic here
    // For example, you can save the selected items to a database or perform other actions
    console.log("Save button clicked");
  };
  const onAddExpense = () => {
    if (selectedItem && selectedAmount) {
        setSelectedItemsTable((prevSelectedItems) => [
          ...prevSelectedItems,
          { name: selectedItem, amount: selectedAmount },
        ]);
        setSelectedItem({});
      setSelectedAmount({});
        console.log(selectedItemsTable)
      }
     
    }
  
  const calculateTotalExpenses = () => {
    let total = 0;
    selectedItemsTable.forEach((item) => {
        total += parseFloat(item.amount);
      });
    return total;
  };

   
    return (
       <View style={styles.container}>
      
      <View style={styles.bluecontainer}>
        {/*back icon */}
      <TouchableOpacity style={styles.backButton} onPress={GoBack} activeOpacity={0.8}>
      <FontAwesome name="caret-left" size={24} color={Colors.primary}/>
    </TouchableOpacity>
        {/* Header */}
        <Text style={styles.headerText}>Edit Expense Entry</Text>
      </View>
      
      <View style={styles.backContainer}>
       
      
      {/*expense  DropDown*/}
      <View style={styles.dropdownRowContainer}>
      <View style={styles.dropdownWrapper}>
        
        <View style={styles.dropdownContainer}>
            
        <SearchableDropdown
          onTextChange={selectedItem}
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
          defaultSelectedItems={selectedItem}
          itemTextStyle={{ color: '#222',fontWeight:'bold' }}
          itemsContainerStyle={{ maxHeight: 140 }}
          items={data}
          placeholder="Select the Category"
          resetValue={false}
          underlineColorAndroid="transparent"
        />
         
          <View style={styles.dropdownWrapper}>
          <View style={styles.AmountInputContainer}>
          <TextInput
          style={styles.AmountInput}
          value={selectedAmount}
          onChangeText={onAmountSelect}
          keyboardType="numeric"
          placeholder="Amount"
        />
        <TouchableOpacity style={styles.addButton} onPress={onAddExpense}>
        <Icon name="add-circle-sharp" size={50} color='#0E5583' />
        </TouchableOpacity>
      </View>
        
</View></View></View></View>
<View>
<View style={styles.totalContainer}>
          {/* Total Expenses */}
          <Text style={styles.totalExp}>Total Expenses: {calculateTotalExpenses()}</Text>
        </View>
  {selectedItemsTable.length > 0 && (
        <ExpenseTable data={selectedItemsTable}  />
      )}

</View>
<View style={styles.textInputContainer}>
          <TextInput
            value={additionalDetails}
            onChangeText={setAdditionalDetails}
            multiline
            numberOfLines={2}
            style={styles.textInput}
            placeholder="Enter additional details here..."
          />
        </View>
<View style={styles.savebtn}>
    {/* Save Button */}
    <TouchableOpacity style={styles.saveButton} onPress={onSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
</View>
       
        </View>
      </View>
    );
  };
  
  export default EditExpenseEntry;

  const styles = StyleSheet.create({
   
  dropdownRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  dropdownWrapper: {
    width: '85%',
      top:50
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
       bottom:0,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius:20,
        flex: 1,
        marginTop: 5, 
      },
      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#fff",
        top:25
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
      }, productAmountValue: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
      },
      AmountInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 10,
        width: '60%',
        bottom:50,
                
      },
      AmountInput: {
        flex: 0.9,
        maxHeight: 140,
        borderWidth: 2,
        borderColor: '#42a5f5',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        color: '#42a5f5', 
        fontWeight: 'bold',
        fontSize: 12,
        padding:10,
        marginTop: 2,
        top:-5,

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
      totalContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      totalExp: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.primary, // or any color of your choice
      },
      textInputContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,

      },
      textInput: {
        height: 80, // Adjust the height as needed
        textAlignVertical: 'top', // Start typing from the top-left corner
        fontSize: 16,
        color: Colors.primary, // or any color of your choice
      },
      backButton: {
        position: 'absolute',
        top: 30,
        left: 10,
        padding: 1,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        elevation: 2,
        width:25
      },
  })
  