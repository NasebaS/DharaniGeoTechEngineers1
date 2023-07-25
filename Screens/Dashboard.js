import React from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';
import Colors from '../assets/Colors/Colors';
import DashboardContainer from './DashboardContainer';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer} />    
      <View style={styles.boardContainer}>
        <DashboardContainer />
      </View>
    </SafeAreaView>
  );
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backContainer: {
    flex: 1,
    backgroundColor: Colors.primary, 
  },
  boardContainer: {
    position: 'absolute',
    top: '2%', 
    left: 0,
    right: 0,
    bottom:1,    
    backgroundColor: 'transparent', 
    paddingHorizontal: 1,    
    zIndex: 1, 
  },
})