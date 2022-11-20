import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addToHistoryList } from '../store/actions/actions';
import theme from '../theme';
import { average } from '../utils';

const styles = StyleSheet.create({
  save: {
    width: '20%',
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

const SaveButton = ({ style }) => {
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const speed = useSelector((state) => state);
  const uploadSpeedAvg = average(speed.upload.speedList);
  const downloadSpeedAvg = average(speed.download.speedList);
  const speedAvg = { download: downloadSpeedAvg, upload: uploadSpeedAvg };

  if (!speed.upload.active && !speed.download.active && disabled) {
    console.log('uploadSpeedAvg && downloadSpeedAvg', uploadSpeedAvg, downloadSpeedAvg);
    if (uploadSpeedAvg && downloadSpeedAvg) {
      console.log('IM through');
      setDisabled(false);
    }
  }
  const handlePress = (result) => {
    dispatch(addToHistoryList(result));
    setDisabled(true);
  };

  const SAVE_BG_COLOR = {
    backgroundColor: disabled ? theme.colors.faded : 'rgb(60, 179,113)',
  };

  return (
    <Pressable
      onPress={() => handlePress(speedAvg)}
      disabled={disabled}
      style={[...style, styles.save, SAVE_BG_COLOR]}
    >
      <Text style={styles.btnText}>Save</Text>
    </Pressable>
  );
};

export default SaveButton;
