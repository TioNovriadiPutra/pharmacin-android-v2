import "react-native-gesture-handler";
import React from "react";
import { RecoilRoot } from "recoil";
import AppNav from "@navigation/AppNav";
import RecoilNexus from "recoil-nexus";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

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
