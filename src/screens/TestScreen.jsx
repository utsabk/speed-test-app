import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import AvgSpeed from '../components/AvgSpeed';
import DownloadGauge from '../components/DownloadGauge';
import SaveButton from '../components/SaveButton';
import StartButton from '../components/StartButton';
import UploadGauge from '../components/UploadGauge';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginBottom: 50,
  },
  testButton: {
    margin: 5,
  },
  saveButton: {
    margin: 5,
  },
  results: {
    flex: 1,
    flexDirection: 'row',
  },
});

const TestScreen = () => {
  const downloadSpeed = useSelector((state) => state.download);
  const uploadSpeed = useSelector((state) => state.upload);

  console.log('test screen downloadSpeed', downloadSpeed);
  console.log('test screen uploadSpeed', uploadSpeed);

  const isDownloadGauge = downloadSpeed.active;
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      {isDownloadGauge ? <DownloadGauge /> : <UploadGauge />}
      <View style={styles.results}>
        <AvgSpeed />
      </View>
      <View style={styles.buttonWrapper}>
        <StartButton style={[styles.testButton]} />
        <SaveButton style={[styles.saveButton]} />
      </View>
    </View>
  );
};

export default TestScreen;
