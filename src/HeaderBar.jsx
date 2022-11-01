import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const styles = StyleSheet.create({
  appBarHeader: {
    backgroundColor: '#C8C3C3',
  },
  appBarContent: {
    color: '#3C74C7',
    fontSize: 18,
    fontWeight: '700',
  },
});

const HeaderBar = () => {
  return (
    <Appbar.Header statusBarHeight={30} style={[styles.appBarHeader]}>
      <Appbar.Content titleStyle={styles.appBarContent} title="Speed test" />
    </Appbar.Header>
  );
};

export default HeaderBar;
