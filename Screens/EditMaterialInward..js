import React from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Colors from '../assets/Colors/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';  

const EditMaterialInward = () => {

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
  const GoBack = () => {
    navigation.goBack();
    
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 3,
    marginTop: 10,
  }, bluecontainer:{
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
  tableHeader: {
    height: 50,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  tableContainer: {
    maxHeight: 265,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
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
});

export default EditMaterialInward;
