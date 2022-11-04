import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { getDownloadSpeed, getUploadSpeed, resetStore } from '../store/actions/actions';
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

  const downloadSpeed = () => {
    dispatch(getDownloadSpeed());
  };

  const uploadSpeed = () => {
    dispatch(getUploadSpeed());
  };

  const clearStore = () => {
    dispatch(resetStore());
  };

  const handlePress = async () => {
    clearStore();
    setDisabled(true);
    timer(downloadSpeed);
    await delay(10000);
    timer(uploadSpeed);
    await delay(10000);
    setDisabled(false);
    // clearInterval(myTimer);
  };
  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          backgroundColor:
            pressed || disabled ? 'rgb(119, 178, 230)' : theme.colors.secondary,
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
