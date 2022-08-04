import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Presentation1 from './assets/presentation_farm_1.jpg';
import Presentation2 from './assets/presentation_farm_2.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Testing Image Imports</Text>
      <Image source={Presentation1} style={{width: 300, height: 150}}/>
      <Image source={Presentation2} style={{width: 300, height: 150, marginTop: 20}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
