import { StyleSheet, Text, View,Dimensions} from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-chart-kit'

const LineChart = () => {
  return (
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
  )
}

export default LineChart

const styles = StyleSheet.create({
    chartContainer: { 
   
        paddingVertical:10,
      },
})