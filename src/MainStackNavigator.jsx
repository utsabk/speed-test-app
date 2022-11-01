import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import HeaderBar from './HeaderBar';
import HistoryScreen from './screens/HistoryScreen';
import TestScreen from './screens/TestScreen';

const Tab = createBottomTabNavigator();

const speedIcon = () => <FontAwesome5 name="rocket" size={24} color="#0183FB" />;

const historyIcon = () => <FontAwesome5 name="clock" size={24} color="#0183FB" />;

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Test" screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen
        name="Test"
        component={TestScreen}
        options={{ header: () => <HeaderBar />, tabBarIcon: speedIcon }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{ header: () => <HeaderBar />, tabBarIcon: historyIcon }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
