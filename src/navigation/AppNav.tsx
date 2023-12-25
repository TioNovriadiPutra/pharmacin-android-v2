import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "@routes/AuthStack";
import AppStack from "@routes/AppStack";
import { useRecoilValue } from "recoil";
import { isAuthenticatesSelector } from "@store/selector/authSelector";
import { navigationRef } from "@utils/constant/pageHeader";
import { View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import useAuth from "@hooks/useAuth";
import CustomToast from "@components/custom/CustomToast";

const AppNav = () => {
  const isAuthenticated = useRecoilValue(isAuthenticatesSelector);

  const [fontsLoaded] = useFonts({
    PJSBold: require("@assets/fonts/PlusJakartaSans-Bold.ttf"),
    PJSSemiBold: require("@assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    PJSMedium: require("@assets/fonts/PlusJakartaSans-Medium.ttf"),
    PJSRegular: require("@assets/fonts/PlusJakartaSans-Regular.ttf"),
  });
  const { isLoading } = useAuth();

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && !isLoading) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, isLoading]);

  if (!fontsLoaded || isLoading) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <CustomToast />
      <NavigationContainer ref={navigationRef}>{isAuthenticated ? <AppStack /> : <AuthStack />}</NavigationContainer>
    </View>
  );
};

export default AppNav;
