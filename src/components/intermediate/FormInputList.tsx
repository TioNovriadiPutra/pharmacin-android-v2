import { StyleSheet, View } from "react-native";
import React from "react";
import PharmacinTextInput from "@components/shared/PharmacinTextInput";
import PharmacinDropdown from "@components/shared/PharmacinDropdown";
import { CustomDropdownInput, CustomTextInput } from "@utils/types/InputType";

type Props = {
  formInputs: (CustomTextInput | CustomDropdownInput)[][];
  control: any;
};

const FormInputList = ({ formInputs, control }: Props) => {
  return (
    <View style={styles.container}>
      {formInputs.map((item, index) => (
        <View
          style={[
            styles.secContainer,
            {
              width: `${100 / formInputs.length}%`,
            },
          ]}
          key={index.toString()}
        >
          {item.map((item, index) => {
            if (item.type === "text" || item.type === "password" || item.type === "phone") {
              return <PharmacinTextInput inputData={item as CustomTextInput} control={control} key={index.toString()} />;
            } else if (item.type === "dropdown") {
              return <PharmacinDropdown key={index.toString()} inputData={item as CustomDropdownInput} control={control} />;
            }
          })}
        </View>
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
  },
  secContainer: {
    gap: 24,
  },
});
