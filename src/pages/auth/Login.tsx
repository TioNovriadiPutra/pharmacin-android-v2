import { StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import Container from "@containers/Container";
import { colors } from "@themes/colors";
import VectorContainer from "@containers/VectorContainer";
import AuthForm from "@components/shared/AuthForm";
import { loginForm } from "@utils/constant/authForm";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { loginErrorState } from "@store/atom/authState";
import { useIsFocused } from "@react-navigation/native";

const Login = () => {
  const setErrorMessage = useSetRecoilState(loginErrorState);

  const formState = useForm();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      setErrorMessage(null);
    }
  }, [isFocused]);

  return (
    <Container color={colors.Primary} style={styles.container}>
      <VectorContainer />
      <Image source={require("@assets/images/logoFull.png")} style={styles.logo} />
      <AuthForm formData={loginForm} handleForm={formState} />
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 26,
  },
  logo: {
    marginTop: 42,
  },
});
