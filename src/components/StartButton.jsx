import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import theme from '../theme';

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
  const handlePress = async () => {};
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        { backgroundColor: pressed ? 'rgb(119, 178, 230)' : theme.colors.secondary },
        ...style,
        styles.start,
      ]}
    >
      <Text style={styles.btnText}>Test</Text>
    </Pressable>
  );
};

export default StartButton;
