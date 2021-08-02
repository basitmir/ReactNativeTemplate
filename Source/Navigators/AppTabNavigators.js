import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@screens/Home/Home';
import About from '@screens/About/About';
import Settings from '@screens/Settings/Settings';


const Tab = createBottomTabNavigator();

export const AppTabNavigators = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  )
}