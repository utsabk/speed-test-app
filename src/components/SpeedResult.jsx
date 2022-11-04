import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: theme.colors.black,
    padding: 15,
    margin: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  text: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.white,
  },
  textSpeed: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.headingLarge,
    color: theme.colors.secondary,
  },
  title: {},
});

const SpeedResult = ({ icon, type, speed }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name={icon} size={24} color={theme.colors.primary} />
        <Text style={styles.text}>{type}</Text>
      </View>
      <Text style={styles.textSpeed}>{speed}</Text>
      <Text style={styles.text}>Mbps</Text>
    </View>
  );
};

export default SpeedResult;
