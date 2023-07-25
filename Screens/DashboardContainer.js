import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../assets/Colors/Colors';
import ProgressCircle from 'react-native-progress-circle';
import { LineChart } from "react-native-chart-kit";

const Dashboard = () => {
  const totalAttendance = 30;
  const present = 25;
  const absent = 5;
  const todayExpenses = 2000;
  const monthlyExpenses = 5000;
  const cashinhandExpenses = 1000;
  const attendancePercentage = (present / totalAttendance) * 100;

  const colors = [Colors.primary, Colors.secondary, Colors.tertiary];

  const getCircleColor = (percentage) => {
    if (percentage < 50) {
      return 'red';
    } else if (percentage >= 50 && percentage < 75) {
      return 'orange';
    } else {
      return '#00D09E';
    }
  };

  return (
    <View style={styles.container}>
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

      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                data: [5000, 2000, 1500, 3000, 1000, 2500]
              }
            ]
          }}
          width={Dimensions.get("window").width-40} // Adjust the width here
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#0E5583",
            backgroundGradientFrom:'#0E5583',
            backgroundGradientTo: "#0E5583",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    </View>
  );
};

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

export default Dashboard;
