import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  changeDownloadState,
  changeUploadState,
  getDownloadSpeed,
  getUploadSpeed,
  resetStore,
} from '../store/actions/actions';
import theme from '../theme';
import { delay, timer } from '../utils';

const styles = StyleSheet.create({
  start: {
    width: '50%',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
  },
});

const StartButton = ({ style }) => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  const downloadSpeed = () => dispatch(getDownloadSpeed());

  const uploadSpeed = () => dispatch(getUploadSpeed());

  const clearStore = () => dispatch(resetStore());

  const updateDownloadState = () => dispatch(changeDownloadState());

  const updateUploadState = () => dispatch(changeUploadState());

  const handlePress = async () => {
    clearStore();
    setDisabled(true);
    timer(downloadSpeed);
    updateDownloadState(); // set the state true
    await delay(10000);
    updateDownloadState(); // set the state false
    updateUploadState(); // set the state true
    timer(uploadSpeed);
    await delay(10000);
    setDisabled(false);
    updateUploadState(); // set the state false
  };
  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          backgroundColor:
            pressed || disabled ? theme.colors.faded : theme.colors.secondary,
        },
        ...style,
        styles.start,
      ]}
    >
      <Text style={styles.btnText}>Test</Text>
    </Pressable>
  );
};

export default StartButton;
