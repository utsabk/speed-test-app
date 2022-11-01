import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SpeedometerGauge from 'react-native-speedometer';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    flexShrink: 1,
  },
});

const Speedometer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SpeedometerGauge value={500} size={300} maxValue={1000} />
    </SafeAreaView>
  );
};

export default Speedometer;
