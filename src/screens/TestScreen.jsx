import React from 'react';
import { StyleSheet, View } from 'react-native';

import Speedometer from '../components/SpeedometerGauge';
import StartButton from '../components/StartButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: '10%',
  },
});

const TestScreen = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Speedometer />
      <StartButton style={[styles.button]} />
    </View>
  );
};

export default TestScreen;
