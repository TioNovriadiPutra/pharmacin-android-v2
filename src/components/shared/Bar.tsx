import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const Bar = () => {
  return <View style={styles.bar} />;
};

export default Bar;

const styles = StyleSheet.create({
  bar: {
    height: 1,
    backgroundColor: colors.Bar,
    marginVertical: 24,
    marginHorizontal: 15,
  },
});
