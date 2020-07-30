import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppTabNavigators } from './AppTabNavigators';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={AppTabNavigators} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;