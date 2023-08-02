import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import TableComponent from '../Components/MaterialTable';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  { id: 1, name: 'Cement' },
  { id: 2, name: 'Steel' },
  { id: 3, name: 'Bricks' },
  { id: 4, name: 'Sand' },
  { id: 5, name: 'Concrete Blocks' },
  { id: 6, name: 'Plywood' },
];

const ProductTable = () => {
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [productList, setProductList] = useState([]);

  const handleAddProduct = () => {
    if (selectedItem && selectedQuantity.trim() !== '') {
      let newProduct;
      
      // Check if the selected item exists in the data array
      const existingProduct = data.find((product) => product.name === selectedItem.name);
      
      if (existingProduct) {
        newProduct = {
          id: existingProduct.id,
          name: existingProduct.name,
          quantity: selectedQuantity.trim(),
        };
      } else {
        // If the selected item doesn't exist in the data array, add it as a new product
        newProduct = {
          id: Math.random().toString(),
          name: selectedItem.name.trim(),
          quantity: selectedQuantity.trim(),
        };
      }

      setProductList((prevProductList) => [...prevProductList, newProduct]);
      setSelectedItem({});
      setSelectedQuantity('');
    }
  };

  const handleRemoveProduct = (id) => {
    setProductList((prevProductList) => prevProductList.filter((product) => product.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Product Dropdown */}
      <View style={styles.dropdownWrapper}>
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
      </View>

      {/* Quantity Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={selectedQuantity}
          onChangeText={setSelectedQuantity}
          keyboardType="numeric"
          placeholder="Quantity"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Icon name="add-circle-sharp" size={50} color='#0E5583' />
        </TouchableOpacity>
      </View>

      {/* Table */}
      <TableComponent data={productList} onDeleteItem={handleRemoveProduct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    marginTop: -30,
    padding: 20,
    backgroundColor: '#fff',
  },
  dropdownWrapper: {
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 10,
    width: '50%',
  },
  input: {
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
  },
  addButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 2,
    borderRadius:50,
   
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductTable;
