import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import theme from './theme';

const styles = StyleSheet.create({
  appBarHeader: {
    backgroundColor: theme.colors.white,
    marginTop: Constants.statusBarHeight,
  },
  appBarContent: {
    color: theme.colors.secondary,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
  },
});

const HeaderBar = () => {
  return (
    <Appbar.Header statusBarHeight={0} style={styles.appBarHeader}>
      <Appbar.Content titleStyle={styles.appBarContent} title="SPEED TEST" />
    </Appbar.Header>
  );
};

export default HeaderBar;
