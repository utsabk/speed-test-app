import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  itemWrapper: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderBottomColor: theme.colors.lightGrey,
    borderBottomWidth: 1,
    padding: 5,
    marginStart: 5,
    marginVertical: 2,
    borderRadius: 10,
    width: '85%',
  },
  speedWrapper: {
    flexDirection: 'row',
    padding: 5,
    margin: 2,
    width: '50%',
  },
  speedText: {
    fontSize: 24,
    color: theme.colors.black,
    fontWeight: theme.fontWeights.bold,
    padding: 5,
  },
});

const ListItem = ({ download, upload, handleIconPress }) => (
  <View style={styles.container}>
    <View style={styles.itemWrapper}>
      <View style={styles.speedWrapper}>
        <MaterialIcons name="file-download" size={32} color={theme.colors.primary} />
        <Text style={styles.speedText}>{download} Mbps</Text>
      </View>
      <View style={styles.speedWrapper}>
        <MaterialIcons name="file-upload" size={32} color={theme.colors.primary} />
        <Text style={styles.speedText}>{upload} Mbps</Text>
      </View>
      <MaterialIcons
        name="cancel"
        size={24}
        color={theme.colors.secondary}
        onPress={handleIconPress}
      />
    </View>
  </View>
);

export default ListItem;
