import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "@themes/colors";
import { useController, useForm } from "react-hook-form";
import { sizeType } from "@themes/fonts";
import HidePasswordButton from "@components/intermediate/HidePasswordButton";
import { CustomTextInput } from "@utils/types/InputType";

type Props = {
  inputData: CustomTextInput;
  control: ReturnType<typeof useForm>["control"];
};

const PharmacinTextInput = ({ inputData, control }: Props) => {
  const [hidePass, setHidePass] = useState(true);

  const { field } = useController({
    name: inputData.name,
    defaultValue: inputData.defaultValue,
    control,
  });

  const onHidePass = () => {
    setHidePass(!hidePass);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={field.value}
        placeholder={inputData.placeholder}
        placeholderTextColor={colors.Placeholder}
        onChangeText={field.onChange}
        style={[styles.input, sizeType.H4]}
        secureTextEntry={inputData.type === "password" ? hidePass : false}
        keyboardType={inputData.type === "phone" ? "phone-pad" : "default"}
      />

      {inputData.type === "password" && <HidePasswordButton hide={hidePass} onPress={onHidePass} />}
    </View>
  );
};

export default PharmacinTextInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.Border,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
  },
  input: {
    color: colors.Black,
    flex: 1,
  },
});
