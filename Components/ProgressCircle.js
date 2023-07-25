import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProgressCircle = () => {
  return (
    <View style={styles.progressBarContainer}>
    <ProgressCircle
      percent={attendancePercentage}
      radius={70}
      borderWidth={8}
      color={getCircleColor(attendancePercentage)}
      shadowColor="#999"
      bgColor="#fff"
    >
      <Text style={styles.progresscircle}>{attendancePercentage.toFixed(1)}%</Text>
    </ProgressCircle>
    <View style={styles.progressData}>
      <View style={[styles.progressColor, { backgroundColor: getCircleColor(attendancePercentage) }]} />
      <Text style={styles.textData}>Present: {present}</Text>
    </View>
    <View style={styles.progressData}>
      <View style={styles.progressColor} />
      <Text style={styles.textData}>Absent: {absent}</Text>
    </View>
  </View>
  )
}

export default ProgressCircle

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#F0F0F0',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 100,
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    progressBarContainer: {
      backgroundColor: '#fff',
      elevation: 5,
      borderRadius: 40,
      padding: 20,
      marginBottom: 16,
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
    },
    progresscircle: {
      fontSize: 18,
      color: '#00D09E',
      fontWeight: 'bold'
    },
    progressColor: {
      width: 10,
      height: 10,
      marginRight: 10,
      borderRadius: 5,
    },
    progressData: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    textData: {
      color: '#333',
      fontWeight: 'bold',
    },
    progressText: {
      flexDirection: "row",
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 40
    },
  
    chartContainer: {
     
     
      paddingVertical:10,
    },
    card: {
      width: '8%',
      backgroundColor: '#fff',
      padding: 20,
      marginBottom: 16,
      borderRadius: 8,
      elevation: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 12,
    },
    cardValue: {
      fontSize: 24,
      fontWeight: 'bold',
      color: Colors.primary,
    },
  });
  