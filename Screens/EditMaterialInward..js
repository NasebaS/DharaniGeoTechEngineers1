import React from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Colors from '../assets/Colors/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';  
import { useNavigation } from '@react-navigation/native';


const data = [
  { id: 1, product: 'Petrol', quantity: 1000 },
  { id: 2, product: 'Diesel', quantity: 2000 },
  { id: 3, product: 'Food', quantity: 5000 },
  { id: 4, product: 'Groceries', quantity: 7000 },
  { id: 5, product: 'Concrete', quantity: 12000 },
  { id: 6, product: 'Steel Bars', quantity: 15000 },
  { id: 7, product: 'Cement', quantity: 8000 },
  { id: 8, product: 'Sand', quantity: 4000 },
  { id: 9, product: 'Bricks', quantity: 6000 },
  { id: 10, product: 'Electrical Supplies', quantity: 3000 },
 
];

  
const EditMaterialInward = () => {
  const navigation = useNavigation();
  const isReceived = false;
  const tableHead = ['S.No', 'Product', 'Quantity'];

  const renderRow = (item, index) => {
    const flexArr = [1, 3, 1];

    return (
      <Row
        key={index}
        data={[
          <Text style={styles.idText}>{index + 1}</Text>,
          <Text style={styles.productText}>{item.product}</Text>,
          <Text style={styles.quantityText}>{item.quantity}</Text>,
        ]}
        style={[
          styles.tableRow,
          index % 2 === 0 ? styles.evenRow : styles.oddRow,
        ]}
        textStyle={styles.tableCell}
        flexArr={flexArr}
      />
    );
  };
  const handleBack = () => {
    navigation.navigate('Material Inward');
    
  };
  const handleReceived = () => {
    // Implement logic for marking the material as received
    // For example, you can set the `isReceived` state to true
    console.log('Received button clicked');
  };
  return (
    <View style={styles.container}>
       <View style={styles.bluecontainer}>
      
         {/* Display Request Number and Date */}
      <View style={styles.requestInfoContainer}>
        <Text style={styles.requestInfoText}>Inward Number: XYZ123</Text>
        <Text style={styles.requestInfoText}>Date: 2023-07-26</Text>
      </View>
      </View>
  
       
      <ScrollView horizontal={false}>
        <View>
          <View style={styles.tableHeader}>
            <Row data={tableHead} textStyle={styles.tableHeaderText}  />
          </View>
          <ScrollView style={styles.tableContainer}>
            <Table borderStyle={styles.tableBorder}>
              {data.map(renderRow)}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={styles.receivedbackcontainer}>
      

        {/* Received Button */}
        <TouchableOpacity style={styles.receivedButton} onPress={handleReceived}>
          <Text style={styles.buttonText}>Receive</Text>
        </TouchableOpacity>
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={handleBack} activeOpacity={0.8}>
          <Text style={styles.buttonbackText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 3,
    marginTop: 10,
  }, bluecontainer:{
    backgroundColor:Colors.primary,
    
    
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
      receivedbackcontainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom:5,
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
      },
      headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
      },
      requestInfoContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        margin: 10,
      },
      requestInfoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary,
        marginBottom: 5,
      },
      requestDetails: {
        fontSize: 16,
        color: '#fff',
      },
      receivedButton: {
        marginTop: 20,
        paddingVertical: 15,
        backgroundColor: Colors.primary,
        borderRadius: 8,
        paddingHorizontal:20,
        elevation:5,
      },
      receivedButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
      },
  tableHeader: {
    height: 50,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop:20,
    marginHorizontal: 10,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  tableContainer: {
    maxHeight: 465,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    marginHorizontal: 10,
    elevation:10,
  },
  tableBorder: {
    borderWidth: 0,
  },
  tableRow: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  evenRow: {
    backgroundColor: '#F5F5F5',
  },
  oddRow: {
    backgroundColor: '#E1F0F5',
  },
  tableCell: {
    textAlign: 'center',
    padding: 8,
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    
  },
  productText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
    alignContent: 'center',
    textAlign: 'center', // Added to center the text horizontally
  },
  idText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center', // Added to center the text horizontally
  },
  quantityText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center', // Added to center the text horizontally
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: "#DFD7BF",
    borderRadius: 8,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation:5,
  },
  buttonbackText:{
    color:'#000',
    fontWeight:"bold"
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default EditMaterialInward;
