import { StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  color?: string;
  type?: "app" | "auth";
};

const Container = ({ children, style, color, type = "auth" }: Props) => {
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
