import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/Colors/Colors';

const MaterialInwardRequest = ({ request }) => {
  const { requestNumber, requestDate, status,quantity } = request;

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
          <Icon name="checkmark-circle" size={24} color="#FFF" />
          <Text style={[styles.statusText, { color: '#FFF' }]}>Approved</Text>
        </View>
      );
    } else if (status === 'pending') {
      return (
        <View style={[styles.statusIconContainer, getStatusColor()]}>
          <Icon name="hourglass-outline" size={24} color="#FFF" />
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

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.rowContainer}>
          <Icon name="document-text-outline" size={20} color="#2196F3" style={styles.icon} />
          <Text style={[styles.requestNumber, { color: '#FF5722' }]}>{requestNumber}</Text>
        </View>
        <View style={styles.rowContainer}>
        <Icon name="calendar-outline" size={20} color="#2196F3" style={styles.icon} />
          <Text style={[styles.requestDate, { color: '#2196F3' }]}>{requestDate}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        {renderStatusIcon()}
        <TouchableOpacity style={styles.editIconContainer}>
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
    paddingHorizontal: 30,
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
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
    // color: '#FF9800',
  },
  requestNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    // color: '#FF9800',
  },
  requestDate: {
    fontSize: 14,
    color: '#2196F3',
   
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
  },
  statusText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
  editIconContainer: {
    marginLeft: 12,
  },
});

export default MaterialInwardRequest;
