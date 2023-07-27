import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ExpenseEntryData from '../assets/ExpenseEntryData';

const ExpenseEntryScreen = () => {
 

  const renderItem = ({ item }) => (
    <View style={styles.expenseContainer}>
      <Text style={styles.expenseText}>Expense Number: {item.expenseNumber}</Text>
      <Text style={styles.expenseText}>Date: {item.date}</Text>
      <Text style={styles.expenseText}>
        <FontAwesome name="rupee" size={16} /> {item.amount}
      </Text>
      <TouchableOpacity style={styles.editButton}>
        <AntDesign name="edit" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ExpenseEntryData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  expenseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
  },
  expenseText: {
    fontSize: 16,
  },
  editButton: {
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 8,
  },
});

export default ExpenseEntryScreen;
