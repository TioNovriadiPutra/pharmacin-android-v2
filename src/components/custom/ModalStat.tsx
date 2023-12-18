import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MainDetailStatType } from "@utils/types/TableType";
import { sizeType } from "@themes/fonts";

type Props = {
  item: MainDetailStatType;
};

const ModalStat = ({ item }: Props) => {
  return (
    <View style={[styles.container, { backgroundColor: item.color }]}>
      <Text style={[sizeType.H2, { color: item.textColor }]}>{item.stat}</Text>
      <Text style={[sizeType.H4, { color: item.textColor }]}>{item.label}</Text>
    </View>
  );
};

export default ModalStat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 15,
    paddingTop: 12,
    paddingBottom: 21,
    borderRadius: 10,
  },
});
