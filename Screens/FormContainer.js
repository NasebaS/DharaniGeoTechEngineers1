import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Image, Alert } from 'react-native';
import Colors from '../assets/Colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FormContainer = ({ username, role }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleUpdatePassword = () => {
    if (newPassword === confirmPassword && newPassword !== '') {
      console.log('New password:', newPassword);
      console.log('Confirm Password:', confirmPassword);
  
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 5000); // 
    }
  
    setNewPassword('');
    setConfirmPassword('');
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      {/* User Icon */}
      <View style={styles.userIconContainer}>
        <Image source={require('../assets/images/user4.png')} style={styles.userIcon} />
      </View>

      <View style={styles.userInfoContainer}>
        {/* User Info */}
        <Text style={styles.username}>{username}John Smith</Text>
        <Text style={styles.role}>{role}Managing Director</Text>
      </View>

      {/* Change Password Input */}
      <TouchableOpacity style={styles.iconButton} onPress={() => setShowModal(true)}>
        <Icon name="security" size={60} color="#C51605" />
        <Text style={styles.iconText}>Update Password</Text>
      </TouchableOpacity>

      
      {/* Modal */}
      <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
        
                <Text style={styles.modalTitle}>Change Password</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="New Password"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secureTextEntry
                />
                <TextInput
                  style={styles.modalInput}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                />
                <TouchableOpacity style={styles.modalButton} onPress={handleUpdatePassword}>
                  <Text style={styles.modalButtonText}>Update Password</Text>
                </TouchableOpacity>
              
            
            <TouchableOpacity style={styles.modalButton} onPress={() => setShowModal(false)}>
              <Text style={styles.modalButtonText}>Cancel</Text>
            </TouchableOpacity>

          
          </View>
        </View>
      </Modal>
      <Modal visible={showSuccessModal} animationType="fade" transparent>
        <View style={styles.successModalContainer}>
          <View style={styles.successModalContent}>
            <AntDesign name="check" size={40} color="#fff" style={styles.check} />
            <Text style={styles.successModalText}>Successfully Updated Password</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: '#F0F0F0', // Light gray background color
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  userIconContainer: {
    position: 'absolute',
    top: -40,
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIcon: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingTop:50
  },
  username: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#666',
  },
  role: {
    fontSize: 20,
    fontWeight:"bold",
    color: 'tomato',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  iconText: {
    fontSize: 16,
    marginLeft: 10,
    color:'#4E4FEB',
    fontWeight:'bold'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  successModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  successModalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  successModalText: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  check:{
    backgroundColor:'green',
    borderRadius:50,
    paddingHorizontal:20,
    paddingVertical:20
  }
});

export default FormContainer;
