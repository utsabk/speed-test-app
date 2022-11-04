import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import Speedometer from '../components/SpeedometerGauge';
import SpeedResult from '../components/SpeedResult';
import StartButton from '../components/StartButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    position: 'absolute',
    bottom: '10%',
  },
  results: {
    flex: 1,
    flexDirection: 'row',
  },
});

const TestScreen = () => {
  const speed = useSelector((state) => state.speed);

  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Speedometer />
      <View style={styles.results}>
        <SpeedResult icon="file-download" type="Download" speed={speed.downloadSpeed} />
        <SpeedResult icon="file-upload" type="Upload" speed={speed.uploadSpeed} />
      </View>

      <StartButton style={[styles.button]} />
    </View>
  );
};

export default TestScreen;
