import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "@routes/AuthStack";
import AppStack from "@routes/AppStack";
import { useRecoilValue } from "recoil";
import { isAuthenticatesSelector } from "@store/selector/authSelector";
import { navigationRef } from "@utils/constant/pageHeader";

const AppNav = () => {
  const isAuthenticated = useRecoilValue(isAuthenticatesSelector);

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
};

export default AppNav;
