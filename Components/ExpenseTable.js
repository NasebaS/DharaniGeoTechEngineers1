import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Table, Row } from 'react-native-table-component';
import Colors from '../assets/Colors/Colors';

const TableComponent = ({ data, onDeleteItem }) => {
  const tableHead = ['S.No','Expense', 'Amount'];

  const renderRow = (item, index) => {
    const flexArr = [1,3,1];

    return (
      <Row
        key={index}
        data={[
          <Text style={styles.idText}>{index + 1}</Text>,
          <Text style={styles.productText}>{item.name}</Text>,
          <Text style={styles.quantityText}>{item.amount}</Text>,
          
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

  const headerFlexArr = [1,3,1];

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
    // flex: 1,
    marginBottom: 3,
    marginTop: 10
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
    left:75
  },
  idText:{
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
    left:25
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
