import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import Colors from '../assets/Colors/Colors';

const Logout = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { username, password } = route.params || {};
  const [newPassword, setNewPassword] = useState('');

  const handleLogout = () => {
    // Perform logout logic here

    // Navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
       
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
       
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 26,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 15,
    borderRadius:15,
  },
  logoutButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 15,
    marginTop: 16,
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Logout;
