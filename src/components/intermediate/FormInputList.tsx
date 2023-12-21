import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import PharmacinTextInput from "@components/shared/PharmacinTextInput";
import PharmacinDropdown from "@components/shared/PharmacinDropdown";
import { CustomDropdownInput, CustomTextInput } from "@utils/types/InputType";
import PharmacinCurrencyInput from "@components/shared/PharmacinCurrencyInput";
import { ValidationErrorType } from "@utils/types/FormType";

type Props = {
  formInputs: (CustomTextInput | CustomDropdownInput)[][];
  control: any;
  validationError?: ValidationErrorType | null;
};

const FormInputList = ({ formInputs, control, validationError }: Props) => {
  return (
    <View style={styles.container}>
      {formInputs.map((item, index1) => (
        <FlatList
          key={index1.toString()}
          data={item}
          keyExtractor={(_, index) => index.toString()}
          inverted={item.filter((item) => item.type === "dropdown").length !== 0 ? true : false}
          style={{
            width: `${100 / formInputs.length}%`,
          }}
          contentContainerStyle={[styles.secContainer, item.filter((item) => item.type === "dropdown").length !== 0 ? styles.secContainerReverse : styles.secContainerNormal]}
          renderItem={({ item }) => {
            if (item.type === "dropdown") {
              return (
                <PharmacinDropdown
                  inputData={item as CustomDropdownInput}
                  control={control}
                  validationErrorMessage={validationError ? validationError?.error.message.find((element) => element.field === item.name) : null}
                />
              );
            } else if (item.type === "currency" || item.type === "currencyStatic") {
              return <PharmacinCurrencyInput inputData={item as CustomTextInput} control={control} />;
            } else {
              return (
                <PharmacinTextInput
                  inputData={item as CustomTextInput}
                  control={control}
                  validationErrorMessage={validationError ? validationError?.error.message.find((element) => element.field === item.name) : null}
                />
              );
            }
          }}
        />
      ))}
    </View>
  );
};

export default FormInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 50,
    justifyContent: "center",
    flex: 1,
  },
  secContainer: {
    gap: 24,
  },
  secContainerReverse: {
    paddingTop: 20,
  },
  secContainerNormal: {
    paddingBottom: 20,
  },
});
