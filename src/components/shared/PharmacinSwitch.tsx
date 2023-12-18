import { StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { CustomSwitchInput } from "@utils/types/InputType";
import SubmitButton from "@components/shared/SubmitButton";
import { handlePageSwitch } from "@utils/helper/switch";

type Props = {
  functionData: CustomSwitchInput;
  activeScreen?: number;
  setActiveScreen?: React.Dispatch<React.SetStateAction<number>>;
  style?: ViewStyle;
  btnStyle?: ViewStyle;
};

const PharmacinSwitch = ({ functionData, activeScreen, setActiveScreen, style, btnStyle }: Props) => {
  return (
    <View style={[styles.container, style]}>
      {functionData.items.map((item, index) => (
        <SubmitButton
          key={index.toString()}
          label={item.label}
          style={[styles.btn, btnStyle]}
          labelSize="H2"
          buttonType={activeScreen === index ? "SUCCESS" : "DEFAULT"}
          onPress={() => {
            if (setActiveScreen) {
              handlePageSwitch(setActiveScreen, index);
            }
          }}
        />
      ))}
    </View>
  );
};

export default PharmacinSwitch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
  },
  btn: {
    paddingVertical: 12,
  },
});
