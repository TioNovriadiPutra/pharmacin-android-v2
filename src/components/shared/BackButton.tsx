import { StyleSheet, Image, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  style?: ViewStyle;
  onPress?: () => void;
};

const BackButton = ({ top, left, right, bottom, onPress, style }: Props) => {
  const nav = useNavigation();

  const onBack = () => {
    nav.goBack();
  };

  return (
    <TouchableOpacity style={[styles.container, { top, left, right, bottom }, style]} onPress={onPress ? onPress : onBack}>
      <Image source={require("@assets/images/back.png")} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
});
