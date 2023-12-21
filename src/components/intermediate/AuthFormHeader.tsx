import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";

type Props = {
  title?: string;
  subTitle?: string;
};

const AuthFormHeader = ({ title, subTitle }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, sizeType.H1]}>{title}</Text>
      <Text style={[[styles.subTitle, sizeType.BodyText]]}>{subTitle}</Text>
    </View>
  );
};

export default AuthFormHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 8,
  },
  title: {
    color: colors.Gray,
  },
  subTitle: {
    color: colors.LightGray,
    textAlign: "center",
  },
});
