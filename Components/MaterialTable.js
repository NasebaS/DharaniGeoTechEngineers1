import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Table, Row } from 'react-native-table-component';
import Colors from '../assets/Colors/Colors';

const TableComponent = ({ data, onDeleteItem }) => {
  const tableHead = ['Product', 'Quantity', 'Action'];

  const renderRow = (item, index) => {
    const flexArr = [3, 1, 1];

    return (
      <Row
        key={index}
        data={[
          <Text style={styles.productText}>{item.product.name}</Text>,
          <Text style={styles.quantityText}>{item.quantity}</Text>,
          <TouchableOpacity onPress={() => onDeleteItem(item.product.id)} style={styles.actionButton}>
            <Icon name="trash" size={24} color="#F15A59" />
          </TouchableOpacity>
        ]}
        style={[
          styles.tableRow,
          index % 2 === 0 ? styles.evenRow : styles.oddRow
        ]}
        textStyle={styles.tableCell}
        flexArr={flexArr}
      />
    );
  };

  const headerFlexArr = [3, 1, 1];

  return (
    <View style={styles.container}>
      <ScrollView horizontal={false}>
        <View>
          <View style={styles.tableHeader}>
            <Row data={tableHead} textStyle={styles.tableHeaderText} flexArr={headerFlexArr} />
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
    flex: 1,
    marginBottom: 5,
    marginTop: -30
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
    maxHeight: 380,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  tableBorder: {
    borderWidth: 0,
  },
  tableRow: {
    height: 70,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  quantityText: {
    fontSize: 14,
    color: '#333',
    fontWeight:'bold'
  },
  actionButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginLeft: 15,
  },
});

export default TableComponent;
