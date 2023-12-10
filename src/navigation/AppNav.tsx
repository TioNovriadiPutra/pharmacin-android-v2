import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "@routes/AuthStack";
import AppStack from "@routes/AppStack";

const AppNav = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNav;
