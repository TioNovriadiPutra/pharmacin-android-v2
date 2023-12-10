import { StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

type Props = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
};

const BackButton = ({ top, left, right, bottom }: Props) => {
  const nav = useNavigation();

  const onBack = () => {
    nav.goBack();
  };

  return (
    <TouchableOpacity style={[styles.container, { top, left, right, bottom }]} onPress={onBack}>
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
