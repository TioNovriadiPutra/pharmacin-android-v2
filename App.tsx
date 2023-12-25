import "react-native-gesture-handler";
import React from "react";
import { RecoilRoot } from "recoil";
import AppNav from "@navigation/AppNav";
import RecoilNexus from "recoil-nexus";
import * as SplashScreen from "expo-splash-screen";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@utils/config/Endpoint";

SplashScreen.preventAutoHideAsync();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RecoilNexus />
        <AppNav />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
