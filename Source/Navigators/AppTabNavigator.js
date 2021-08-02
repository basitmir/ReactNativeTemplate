import React from "react";
import { Image } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Closet from "../Screens/Feature/Closet";
import Profile from "../Screens/Feature/Profile";
import Home from "../Screens/Feature/Home";
import { useTheme } from "react-native-paper";
import { ActiveDot } from "@components";

const Tab = createMaterialBottomTabNavigator();

export function AppTabNavigator() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: colors.background,
      }}
      labeled={false}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <React.Fragment>
              <Image
                source={
                  focused
                    ? require("@icons/Tabs/Active/Home/Home.png")
                    : require("@icons/Tabs/Inactive/Home/Home.png")
                }
              />
              {focused && <ActiveDot />}
            </React.Fragment>
          ),
        }}
      />

      <Tab.Screen
        name="Closet"
        component={Closet}
        options={{
          tabBarIcon: ({ focused }) => (
            <React.Fragment>
              <Image
                source={
                  focused
                    ? require("@icons/Tabs/Active/Closet/Closet.png")
                    : require("@icons/Tabs/Inactive/Closet/Closet.png")
                }
              />
              {focused && <ActiveDot />}
            </React.Fragment>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <React.Fragment>
              <Image
                source={
                  focused
                    ? require("@icons/Tabs/Active/Profile/Profile.png")
                    : require("@icons/Tabs/Inactive/Profile/Profile.png")
                }
              />
              {focused && <ActiveDot />}
            </React.Fragment>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
