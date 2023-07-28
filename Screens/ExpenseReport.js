import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';

const ExpenseReport = () => {
  const webviewRef = useRef(null);

  const printWebView = async () => {
    try {
      const { uri } = await webviewRef.current?.takeSnapshot({
        format: 'png',
        result: 'file',
        quality: 0.8,
      });

      const options = {
        html: `<img src="${uri}" width="100%" />`,
        fileName: 'expense_report',
        directory: 'Documents',
      };

      const pdf = await RNHTMLtoPDF.convert(options);
      console.log('PDF File:', pdf.filePath); // You can print the PDF file path

      // Print the generated PDF
      await RNPrint.print({ filePath: pdf.filePath });
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{ uri: 'https://www.google.com/' }}
        style={styles.webView}
      />

      {/* Floating Print Icon */}
      <TouchableOpacity style={styles.printIcon} onPress={printWebView}>
        <Icon name="print" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
  printIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF', // Blue color for the icon background
    borderRadius: 30,
    padding: 10,
    elevation: 5,
  },
});

export default ExpenseReport;
