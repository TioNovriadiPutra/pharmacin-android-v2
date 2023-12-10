import React from "react";
import { Stack } from "@utils/constant/navigation";
import Login from "@pages/auth/Login";
import Register from "@pages/auth/Register";

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
