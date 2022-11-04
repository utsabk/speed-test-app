import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SpeedometerGauge from 'react-native-speedometer';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});
const labels = [
  {
    labelColor: theme.colors.secondary,
    activeBarColor: '#ff2900',
  },
  {
    labelColor: theme.colors.secondary,
    activeBarColor: '#ff5400',
  },
  {
    labelColor: theme.colors.secondary,
    activeBarColor: '#f4ab44',
  },
  {
    labelColor: theme.colors.secondary,
    activeBarColor: '#f2cf1f',
  },
  {
    labelColor: theme.colors.secondary,
    activeBarColor: '#14eb6e',
  },
  {
    labelColor: theme.colors.secondary,
    activeBarColor: '#00ff6b',
  },
];
const labelStyle = {
  color: theme.colors.secondary,
  opacity: 0,
};
const Speedometer = ({ speed }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SpeedometerGauge
        defaultValue={5}
        value={speed}
        size={300}
        easeDuration={1500}
        labels={labels}
        maxValue={500}
        labelStyle={labelStyle}
      />
    </SafeAreaView>
  );
};

export default Speedometer;
