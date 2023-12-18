import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomTextInput } from "@utils/types/InputType";
import { useController, useForm } from "react-hook-form";
import { sizeType } from "@themes/fonts";
import { colors } from "@themes/colors";
import CurrencyInput from "react-native-currency-input";

type Props = {
  inputData: CustomTextInput;
  control: ReturnType<typeof useForm>["control"];
};

const PharmacinCurrencyInput = ({ inputData, control }: Props) => {
  const { field } = useController({
    name: inputData.name,
    defaultValue: inputData.defaultValue,
    control,
  });

  return (
    <View style={styles.mainContainer}>
      {inputData.placeholderPosition === "out" && <Text style={[styles.placeholder, sizeType.H3]}>{inputData.placeholder}</Text>}
      <View style={[styles.container, inputData.type === "currencyStatic" ? styles.containerStatic : styles.containerDynamic]}>
        <CurrencyInput
          value={field.value}
          onChangeValue={field.onChange}
          prefix="Rp. "
          delimiter="."
          separator=","
          minValue={0}
          precision={0}
          placeholder=""
          keyboardType="number-pad"
          editable={inputData.type === "currencyStatic" ? false : true}
          style={[styles.input, sizeType.H4]}
        />
      </View>
    </View>
  );
};

export default PharmacinCurrencyInput;

const styles = StyleSheet.create({
  mainContainer: {
    gap: 6,
  },
  placeholder: {
    color: colors.Placeholder,
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
    borderColor: colors.Border,
  },
  input: {
    color: colors.Black,
    flex: 1,
  },
});
