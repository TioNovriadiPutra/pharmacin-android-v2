import { View } from "react-native";
import React from "react";
import { customStyles } from "@themes/styles";
import { Control, FieldValues } from "react-hook-form";
import FormInputList from "@components/intermediate/FormInputList";
import { CustomDropdownInput, CustomTextInput } from "@utils/types/InputType";

type Props = {
  control: Control<FieldValues, any>;
  inputs: (CustomTextInput | CustomDropdownInput)[][];
};

const LeftTransactionForm = ({ control, inputs }: Props) => {
  return (
    <View style={customStyles.transactionBox}>
      <FormInputList control={control} formInputs={inputs} />
    </View>
  );
};

export default LeftTransactionForm;
