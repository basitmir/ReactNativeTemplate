// App Wrapper
import React from "react"
import { AppContainer } from "../Navigators/AppContainer"
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider as StoreProvider } from 'react-redux';
import { DefaultTheme } from "@themes";
import { Persistor, Stores } from "@redux";
import { AppLoader } from "@components";

export const AppHoc = () => {
  return (
    <StoreProvider store={Stores}>
      <PersistGate loading={null} persistor={Persistor}>
        <PaperProvider theme={DefaultTheme}>
          <AppContainer />
          <AppLoader />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  )
}