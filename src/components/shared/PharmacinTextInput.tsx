import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { colors } from "@themes/colors";
import { useController, useForm } from "react-hook-form";
import { sizeType } from "@themes/fonts";
import HidePasswordButton from "@components/intermediate/HidePasswordButton";
import { CustomTextInput } from "@utils/types/InputType";
import { ValidationErrorMessageType } from "@utils/types/FormType";
import { customStyles } from "@themes/styles";

type Props = {
  inputData: CustomTextInput;
  control: ReturnType<typeof useForm>["control"];
  validationErrorMessage?: ValidationErrorMessageType | null;
};

const PharmacinTextInput = ({ inputData, control, validationErrorMessage }: Props) => {
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
    <View style={styles.mainContainer}>
      {inputData.placeholderPosition === "out" && <Text style={[styles.placeholder, sizeType.H3]}>{inputData.placeholder}</Text>}
      <View style={[styles.container, inputData.type === "static" ? styles.containerStatic : styles.containerDynamic, { borderColor: validationErrorMessage ? colors.Danger : colors.Border }]}>
        <TextInput
          value={field.value}
          placeholder={inputData.placeholderPosition === "out" ? "" : inputData.placeholder}
          placeholderTextColor={colors.Placeholder}
          onChangeText={field.onChange}
          style={[styles.input, sizeType.H4]}
          secureTextEntry={inputData.type === "password" ? hidePass : false}
          keyboardType={inputData.type === "phone" ? "phone-pad" : "default"}
          editable={inputData.type === "static" ? false : true}
        />

        {inputData.type === "password" && <HidePasswordButton hide={hidePass} onPress={onHidePass} />}
      </View>

      {validationErrorMessage && (
        <Text numberOfLines={1} style={[customStyles.errorMessage, sizeType.H4]}>
          {validationErrorMessage.message}
        </Text>
      )}
    </View>
  );
};

export default PharmacinTextInput;

const styles = StyleSheet.create({
  mainContainer: {
    gap: 6,
  },
  container: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
  },
  containerStatic: {
    backgroundColor: colors.PageDefault,
  },
  containerDynamic: {
    borderWidth: 1,
  },
  input: {
    color: colors.Black,
    flex: 1,
  },
  placeholder: {
    color: colors.Placeholder,
  },
});
