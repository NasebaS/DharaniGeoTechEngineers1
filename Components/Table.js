import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Table, Row } from 'react-native-table-component';

const TableComponent = ({ data, onDeleteItem }) => {
  const tableHead = ['Product', 'Quantity', 'Action'];

  const renderRow = (item, index) => (
    <Row
      key={index}
      data={[
        item.product.name,
        item.quantity.name,
        <TouchableOpacity onPress={() => onDeleteItem(item.product.id)}>
          <Icon name="trash" size={24} color="red" />
        </TouchableOpacity>,
      ]}
      textStyle={styles.tableCell}
    />
  );

  return (
    <View style={styles.tableContainer}>
      <Table borderStyle={styles.tableBorder}>
        <Row data={tableHead} style={styles.tableHeader} textStyle={styles.tableHeaderCell} />
        {data.map(renderRow)}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  tableHeader: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableCell: {
    textAlign: 'center',
  },
});

export default TableComponent;
