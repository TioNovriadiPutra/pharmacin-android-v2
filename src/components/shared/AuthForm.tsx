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

type Props = {
  formData: AuthFormType;
  handleForm: ReturnType<typeof useForm>;
  withBack?: boolean;
};

const AuthForm = ({ formData, handleForm, withBack = false }: Props) => {
  return (
    <View style={[styles.container, { width: formData.inputs.length > 1 ? "70%" : "50%" }]}>
      {withBack && <BackButton left={32} top={32} />}
      <AuthFormHeader title={formData.title} subTitle={formData.subTitle} />
      <FormInputList formInputs={formData.inputs} control={handleForm.control} />
      <SubmitButton label={formData.submitButton.label} buttonType={formData.submitButton.btnType} style={styles.button} />

      {formData.title === "Masuk" && <AuthFormFooter />}
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingVertical: 42,
    paddingHorizontal: 45,
    elevation: 5,
    gap: 47,
  },
  button: {
    alignSelf: "center",
    width: "50%",
  },
});
