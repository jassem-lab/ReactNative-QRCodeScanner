/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

const App = () => {
  onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.log('An error occured', err),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtStyle}>QRCode Scanner- Example</Text>
      <QRCodeScanner onRead={onSuccess} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  txtStyle: {
    textAlign: 'center',
  },
});

export default App;
