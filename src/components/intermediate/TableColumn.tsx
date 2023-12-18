import { StyleSheet, Text } from "react-native";
import React from "react";
import { TableDataType } from "@utils/types/TableType";
import { formatCurrency } from "react-native-format-currency";
import { sizeType } from "@themes/fonts";
import { customStyles } from "@themes/styles";

type Props = {
  item: TableDataType;
};

const TableColumn = ({ item }: Props) => {
  return (
    <Text numberOfLines={1} style={[styles.container, sizeType.BodyText, customStyles.title]}>
      {item.type === "currency" ? formatCurrency({ amount: item.label as number, code: "IDR" })[0] : item.label}
    </Text>
  );
};

export default TableColumn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
