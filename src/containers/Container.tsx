import { StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { colors } from "@themes/colors";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  color?: string;
  type?: "app" | "auth";
};

const Container = ({ children, style, color = colors.PageDefault, type = "auth" }: Props) => {
  return <View style={[styles.container, style, type === "app" && styles.appContainer, { backgroundColor: color }]}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 14,
  },
  appContainer: {
    padding: 14,
  },
});
