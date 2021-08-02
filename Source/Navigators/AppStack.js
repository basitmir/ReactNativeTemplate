// All stack navigator of the app
import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Routes } from "./Routes/Routes";
import { useTheme } from "react-native-paper";

const Stack = createStackNavigator();
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

export const AppStacks = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        ...TransitionScreenOptions,
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          alignSelf: "center",
          color: colors.primary,
          fontWeight: "400",
        },
      }}>
      {Routes.map(({ name, component, options }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
};
