import { Image, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { CustomTextInput } from "@utils/types/InputType";
import { colors } from "@themes/colors";
import { Controller, useForm } from "react-hook-form";
import { sizeType } from "@themes/fonts";

type Props = {
  inputData: CustomTextInput;
};

const HeaderSearchInput = ({ inputData }: Props) => {
  const { control } = useForm();

  return (
    <View style={styles.container}>
      <Image source={require("@assets/images/search.png")} />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput value={value} placeholder={inputData.placeholder} placeholderTextColor={colors.Placeholder} onChangeText={onChange} style={[styles.input, sizeType.H3]} />
        )}
        name={inputData.name}
      />
    </View>
  );
};

export default HeaderSearchInput;

const styles = StyleSheet.create({
  container: {
    width: 350,
    backgroundColor: colors.Default,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  input: {
    flex: 1,
    color: colors.Black,
  },
});
