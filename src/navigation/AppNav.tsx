import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "@routes/AuthStack";
import AppStack from "@routes/AppStack";
import { useRecoilValue } from "recoil";
import { isAuthenticatesSelector } from "@store/selector/authSelector";

const AppNav = () => {
  const isAuthenticated = useRecoilValue(isAuthenticatesSelector);

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNav;
