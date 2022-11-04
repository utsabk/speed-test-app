import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import DownloadGauge from '../components/DownloadGauge';
import DownloadSpeedAvg from '../components/DownloadSpeedAvg';
import StartButton from '../components/StartButton';
import UploadGauge from '../components/UploadGauge';
import UploadSpeedAvg from '../components/UploadSpeedAvg';

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
  const downloadSpeed = useSelector((state) => state.download);
  const uploadSpeed = useSelector((state) => state.upload);

  console.log('test screen downloadSpeed', downloadSpeed);
  console.log('test screen uploadSpeed', uploadSpeed);

  const isDownloadGauge = downloadSpeed.active;
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      {isDownloadGauge ? <DownloadGauge /> : <UploadGauge />}
      <View style={styles.results}>
        <DownloadSpeedAvg />
        <UploadSpeedAvg />
      </View>
      <StartButton style={[styles.button]} />
    </View>
  );
};

export default TestScreen;
