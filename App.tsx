import "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import { RecoilRoot } from "recoil";
import AppNav from "@navigation/AppNav";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import RecoilNexus from "recoil-nexus";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    PJSBold: require("@assets/fonts/PlusJakartaSans-Bold.ttf"),
    PJSSemiBold: require("@assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    PJSMedium: require("@assets/fonts/PlusJakartaSans-Medium.ttf"),
    PJSRegular: require("@assets/fonts/PlusJakartaSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <RecoilRoot>
        <RecoilNexus />
        <AppNav />
      </RecoilRoot>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
