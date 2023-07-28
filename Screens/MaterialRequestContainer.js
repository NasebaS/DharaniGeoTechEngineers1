import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../assets/Colors/Colors';

const MaterialRequestContainer = ({ request}) => {
  const { requestNumber, requestDate, status,quantity } = request;

  const navigation=useNavigation()
  const getStatusColor = () => {
    if (status === 'approved') {
      return { backgroundColor: '#4CAF50' }; // Green color for approved status
    } else if (status === 'pending') {
      return { backgroundColor: '#FF9800' }; // Orange color for pending status
    } else {
      return { backgroundColor: '#E0E0E0' }; // Gray color for other statuses
    }
  };

  const renderStatusIcon = () => {
    if (status === 'approved') {
      return (
        <View style={[styles.statusIconContainer, getStatusColor()]}>
          <Icon name="checkmark-circle" size={18} color="#FFF" />
          <Text style={[styles.statusText, { color: '#FFF' }]}>Approved</Text>
        </View>
      );
    } else if (status === 'pending') {
      return (
        <View style={[styles.statusIconContainer, getStatusColor()]}>
          <Icon name="hourglass-outline" size={21} color="#FFF" />
          <Text style={[styles.statusText, { color: '#FFF' }]}>Pending</Text>
        </View>
      );
    } else {
      // You can handle other statuses here
      return (
        <View style={[styles.statusIconContainer, getStatusColor()]}>
          <Icon name="alert-circle" size={24} color="#FFF" />
          <Text style={[styles.statusText, { color: '#FFF' }]}>Other Status</Text>
        </View>
      );
    }
  };
const editPress=()=>{
navigation.navigate('Edit Material request')
}
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.rowContainer}>
          <Icon name="document-text-outline" size={20} color="#2196F3" style={styles.icon} />
          <View style={styles.requestcontainer}>
            <Text style={styles.requestNumber}>{requestNumber}</Text>
            <Text style={styles.requestDate}>{requestDate}</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <Icon name="cube-outline" size={20} color="#2196F3" style={styles.icon} />
          <Text style={styles.quantity}>Quantity: 1{quantity}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        {renderStatusIcon()}
        <TouchableOpacity style={styles.editIconContainer} onPress={editPress}>
          <Icon name="create" size={24} color="#FF5722" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    elevation: 4, // Add elevation for a card-like effect
  },
  infoContainer: {
    flex: 1,
  },
  requestcontainer:{
   flexDirection:'row',
   justifyContent:"space-between",
   alignItems:"center",
   marginLeft:5
  },
  rowContainer: {
    flexDirection: 'row',
   
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 6,
    // color: '#FF9800',
  },
  requestNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF5722',
  },
  requestDate: {
    fontSize: 12,
    color: '#2196F3',
   marginLeft:15,
   fontWeight:"700"
  },
  quantity: {
    fontSize: 14,
    color: '#B728E6',
    fontWeight: 'bold',
    backgroundColor: '#F3E5F5',
    padding: 4,
    borderRadius: 8,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: '#FFF',
  },
  
  statusText: {
    marginLeft: 6,
    fontSize: 13,
    fontWeight: 'bold',
    marginRight: 4,
  },
  
  editIconContainer: {
    marginLeft: 12,
  },
});

export default MaterialRequestContainer;
