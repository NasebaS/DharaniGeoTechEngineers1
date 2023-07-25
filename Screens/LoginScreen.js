import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role,setRole]=useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Login:', username, password);
    navigation.navigate('DrawerNavigator');
  };

  return (
    <ImageBackground
      source={require('../assets/images/logo.png')}
      style={styles.backgroundImage}
    >
      <ImageBackground
        source={require('../assets/images/images.jpg')}
        style={styles.backgroundImage1}
      >
        <View style={styles.container}>
          <Image
            source={require('../assets/images/logobg.png')}
            style={styles.logo}
          />
          <View style={styles.loginContainer}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                placeholderTextColor="#fff"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#fff"
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  backgroundImage1: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  loginContainer: {
    backgroundColor: 'rgba(14, 85, 131, 0.8)',
    borderRadius: 50,
    padding: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 8,
    height: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 80,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#95BF40',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
