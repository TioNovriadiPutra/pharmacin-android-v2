import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { MainDetailDataType } from "@utils/types/TableType";
import { sizeType } from "@themes/fonts";
import { formatCurrency } from "react-native-format-currency";

type Props = {
  item: MainDetailDataType;
};

const DetailDataBox = ({ item }: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.placeholder, sizeType.H3]}>{item.label}</Text>
      <View style={styles.container}>
        <Text style={[styles.input, sizeType.H4]}>{item.type === "text" ? item.value : formatCurrency({ amount: item.value as number, code: "IDR" })[0]}</Text>
      </View>
    </View>
  );
};

export default DetailDataBox;

const styles = StyleSheet.create({
  mainContainer: {
    gap: 6,
  },
  container: {
    borderWidth: 1,
    borderColor: colors.Border,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
  },
  input: {
    color: colors.Black,
    flex: 1,
  },
  placeholder: {
    color: colors.Placeholder,
  },
});
