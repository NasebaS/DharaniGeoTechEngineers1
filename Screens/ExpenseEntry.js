import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ExpenseEntryData from '../assets/ExpenseEntryData';
import Colors from '../assets/Colors/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const ExpenseEntryScreen = () => {
  const navigation = useNavigation();

  const renderGradientBackground = (colors) => (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBackground}
    />
  );
  const handleEditPress = () => {
    navigation.navigate('EditExpenseEntry');
  };
  const renderItem = ({ item }) => (
    <View style={styles.expenseContainer}>
      <View style={styles.infoContainer}>
      <Text style={styles.expenseNumberText}>
  {/* <MaterialIcons name="wallet" size={18} color="#FF5722" style={{ marginRight: 8 }} /> Wallet icon */}
  <FontAwesome name="building" size={16} color="#2E86C1" style={{ marginRight: 8 }} /> {/* Building icon */}
  <Text style={styles.numberText}>{item.expenseNumber}</Text>
</Text>
        <Text style={styles.dateText}><Text style={styles.dateValueText}>{item.date}</Text></Text>
      </View>
      <View style={styles.amountContainer}>
        <View style={styles.amountTextContainer}>
        {renderGradientBackground(['#F39C12', '#F1C40F'])} 
          <Text style={styles.amountText}>
            <FontAwesome name="rupee" size={15} /> {item.amount}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
        <AntDesign name="edit" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Bar */}
      <View style={styles.headerBar}>
        <Text style={styles.headerText}></Text>
      </View>

      <FlatList
        data={ExpenseEntryData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>No expense entries yet.</Text>}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => handleAddPress()}
        activeOpacity={0.8}
      >
        <AntDesign name="pluscircleo" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  headerBar: {
    backgroundColor: Colors.primary, // Use a color that complements the primary color
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  expenseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: '#FFF',
    borderRadius: 10, 
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  infoContainer: {
    flex: 1,
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 24, // Match the borderRadius of amountTextContainer
  },
  expenseNumberText: {
    fontSize: 16, // Slightly larger font for the expense number
    fontWeight: 'bold',
    // color:Colors.primary,
    color: '#FF5722', // Orange color for the expense number
    flexDirection: 'row', // Add flexDirection to align the wallet icon
    alignItems: 'center', // Center the wallet icon vertically
  },
  numberText: {
    color: '#FF5722', // Orange color for the expense number
  },
  dateText: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
    fontWeight:"bold"
  },
  dateValueText: {
    color: '#FFC107', // Yellow color for the date value
  },
  amountContainer: {
    marginRight:50,
    alignItems: 'flex-end',
  },
  amountTextContainer: {
    backgroundColor: '#7CB342', // Use a vibrant and attractive color
    borderRadius: 24, // Make the amount container rounded
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF', // White color for the amount text
  },
  editButton: {
    backgroundColor:Colors.primary, // Blue color for the edit button
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF', // White color for the empty state message
    marginTop: 20,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FF0060',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.3, 
    shadowOffset: { width: 0, height: 2 }, 
  },
});

export default ExpenseEntryScreen;
