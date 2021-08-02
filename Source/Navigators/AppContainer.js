// App Navigation Container
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { AppStacks } from "./AppStack"
import { navigationRef } from "./RootNavigator"

export const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStacks />
    </NavigationContainer>
  )
}