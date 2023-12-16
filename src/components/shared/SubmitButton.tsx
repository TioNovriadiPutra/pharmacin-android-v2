import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import ButtonType from "@utils/enums/buttonEnums";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";

type Props = {
  label: string;
  style?: ViewStyle;
  buttonType?: keyof typeof ButtonType;
  labelSize?: keyof typeof sizeType;
  onPress?: any;
};

const SubmitButton = ({ label, style, buttonType = "DEFAULT", labelSize = "H4", onPress }: Props) => {
  return (
    <TouchableOpacity style={[styles.container, style, { backgroundColor: ButtonType[buttonType] }]} onPress={onPress}>
      <Text style={[sizeType[labelSize], { color: buttonType === "DEFAULT" ? colors.DefaultText : colors.White }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 13,
    borderRadius: 10,
  },
});
