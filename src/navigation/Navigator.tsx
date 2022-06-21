import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabNavigatorParamsList} from './models';

import {SearchScreen} from '../screens/Search';
import {HistoryScreen} from '../screens/History';

const TabNavigator = createBottomTabNavigator<TabNavigatorParamsList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator.Navigator>
        <TabNavigator.Screen name="Search" component={SearchScreen} />
        <TabNavigator.Screen name="History" component={HistoryScreen} />
      </TabNavigator.Navigator>
    </NavigationContainer>
  );
};
