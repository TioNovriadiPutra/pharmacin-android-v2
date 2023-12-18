import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import PharmacinTextInput from "@components/shared/PharmacinTextInput";
import PharmacinDropdown from "@components/shared/PharmacinDropdown";
import { CustomDropdownInput, CustomTextInput } from "@utils/types/InputType";
import PharmacinCurrencyInput from "@components/shared/PharmacinCurrencyInput";

type Props = {
  formInputs: (CustomTextInput | CustomDropdownInput)[][];
  control: any;
};

const FormInputList = ({ formInputs, control }: Props) => {
  return (
    <View style={styles.container}>
      {formInputs.map((item, index) => (
        <FlatList
          key={index.toString()}
          data={item}
          keyExtractor={(_, index) => index.toString()}
          style={{
            width: `${100 / formInputs.length}%`,
          }}
          contentContainerStyle={styles.secContainer}
          renderItem={({ item }) => {
            if (item.type === "dropdown") {
              return <PharmacinDropdown key={index.toString()} inputData={item as CustomDropdownInput} control={control} />;
            } else if (item.type === "currency" || item.type === "currencyStatic") {
              return <PharmacinCurrencyInput key={index.toString()} inputData={item as CustomTextInput} control={control} />;
            } else {
              return <PharmacinTextInput inputData={item as CustomTextInput} control={control} key={index.toString()} />;
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
});
