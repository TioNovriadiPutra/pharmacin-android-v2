import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import AuthFormHeader from "@components/intermediate/AuthFormHeader";
import FormInputList from "@components/intermediate/FormInputList";
import { AuthFormType } from "@utils/types/FormType";
import { useForm } from "react-hook-form";
import SubmitButton from "./SubmitButton";
import AuthFormFooter from "@components/intermediate/AuthFormFooter";
import BackButton from "./BackButton";
import useAuth from "@hooks/useAuth";
import useFecthData from "@hooks/useFecthData";
import ENDPOINT from "@utils/config/Endpoint";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginErrorState, regisErrorState } from "@store/atom/authState";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRootStackParamType } from "@utils/types/RootStackParamType";

type Props = {
  formData: AuthFormType;
  handleForm: ReturnType<typeof useForm>;
  withBack?: boolean;
  type?: "login" | "regis";
};

const AuthForm = ({ formData, handleForm, withBack = false, type = "login" }: Props) => {
  const loginError = useRecoilValue(loginErrorState);
  const [regisError, setRegisError] = useRecoilState(regisErrorState);

  const { login } = useAuth();
  const { postFunction } = useFecthData();
  const nav = useNavigation<NativeStackNavigationProp<AuthRootStackParamType, "Register">>();

  return (
    <View style={[styles.container, type === "login" ? styles.containerLogin : styles.containerRegis]}>
      {withBack && <BackButton left={32} top={32} />}
      <AuthFormHeader title={formData.title} subTitle={formData.subTitle} />
      <FormInputList formInputs={formData.inputs} control={handleForm.control} validationError={type === "login" ? loginError : regisError} />
      <View style={styles.footer}>
        {formData.submitButton && (
          <SubmitButton
            label={formData.submitButton.label}
            buttonType={formData.submitButton.btnType}
            style={styles.button}
            onPress={handleForm.handleSubmit(
              type === "login"
                ? (data) => login(data.email, data.password)
                : (data) =>
                    postFunction(ENDPOINT.register, data, false, nav, "Login").catch((error) => {
                      setRegisError(error);
                    })
            )}
          />
        )}
        {type === "login" && <AuthFormFooter />}
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingHorizontal: 45,
    elevation: 5,
    flex: 1,
  },
  containerLogin: {
    paddingVertical: 42,
    gap: 70,
    width: "40%",
  },
  containerRegis: {
    paddingTop: 32,
    gap: 47,
    width: "70%",
  },
  button: {
    alignSelf: "center",
    width: "70%",
  },
  footer: {
    gap: 34,
  },
});
