import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { sizeType } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
  functionData: { label: string }[];
  activeScreen: number;
};

const DetailSwitch = ({ functionData, activeScreen }: Props) => {
  return (
    <View style={styles.container}>
      {functionData.map((item, index) => (
        <TouchableOpacity key={index.toString()} style={[styles.btn, { backgroundColor: activeScreen === index ? colors.Primary : colors.Default }]}>
          <Text style={[sizeType.H2, { color: activeScreen === index ? colors.White : colors.Placeholder }]}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DetailSwitch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
    flex: 1,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 10,
    flex: 1,
  },
});
