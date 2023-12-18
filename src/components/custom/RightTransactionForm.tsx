import { StyleSheet, View } from "react-native";
import React from "react";
import { customStyles } from "@themes/styles";
import { Control, FieldValues } from "react-hook-form";
import { CustomDropdownInput, CustomTextInput } from "@utils/types/InputType";
import FormInputList from "@components/intermediate/FormInputList";

type Props = {
  control: Control<FieldValues, any>;
  inputs: (CustomTextInput | CustomDropdownInput)[][];
};

const RightTransactionForm = ({ control, inputs }: Props) => {
  return (
    <View style={[customStyles.transactionBox, styles.container]}>
      <FormInputList control={control} formInputs={inputs} />
    </View>
  );
};

export default RightTransactionForm;

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});
