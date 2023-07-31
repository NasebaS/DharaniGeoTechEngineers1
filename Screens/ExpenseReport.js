import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
// import RNPrint from 'react-native-print';

const ExpenseReport = () => {
  const webviewRef = useRef(null);
  const[htmlprint , Sethtmlprint] = useState('');

  // const uri = 'http://43.204.47.63:8080/ersjewellers/frmRegisterReports.aspx?mobileview=yes&id=1';

  // const jsCode = " window.ReactNativeWebView.postMessage(document.getElementById('divRecords').innerHTML);";
  

  // const _onMessage = (message) => {
  //   // Sethtmlprint(message.nativeEvent.data);  
  //   Sethtmlprint("<html><head><style>table, th, td {border: 1px solid black;}</style></head>"+message.nativeEvent.data+"</html>");   
  // console.log('success')
  // }

  // const printwebview=async()=>{
  //   await RNPrint.print({
  //     html: htmlprint
  //   })
  // }

  return (
    <View style={styles.container}>
      {/* <WebView
        ref={webviewRef}
        source={{ uri: uri }}
        style={styles.webView}
        injectedJavaScript={jsCode}
        onMessage={event => {_onMessage(event)}}
      /> */}

      {/* Floating Print Icon */}
      <TouchableOpacity style={styles.printIcon} 
      // onPress={printwebview}
      >
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
