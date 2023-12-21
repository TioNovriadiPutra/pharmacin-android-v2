import { StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import Container from "@containers/Container";
import { colors } from "@themes/colors";
import VectorContainer from "@containers/VectorContainer";
import AuthForm from "@components/shared/AuthForm";
import { regisForm } from "@utils/constant/authForm";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { regisErrorState } from "@store/atom/authState";
import { useIsFocused } from "@react-navigation/native";

const Register = () => {
  const setErrorMessage = useSetRecoilState(regisErrorState);

  const formState = useForm();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      setErrorMessage(null);
    }
  }, [isFocused]);

  return (
    <Container color={colors.Secondary} style={styles.container}>
      <VectorContainer type="register" />
      <Image source={require("@assets/images/logoFull.png")} style={styles.logo} />
      <AuthForm formData={regisForm} handleForm={formState} withBack type="regis" />
    </Container>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 26,
  },
  logo: {
    marginTop: 42,
  },
});
