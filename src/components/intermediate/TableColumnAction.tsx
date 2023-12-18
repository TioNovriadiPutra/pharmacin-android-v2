import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

type Props = {
  tableAction: Array<"edit" | "delete" | "invoice" | "opname">;
};

const TableColumnAction = ({ tableAction }: Props) => {
  return (
    <View style={styles.container}>
      {tableAction.map((item, index) => (
        <TouchableOpacity key={index.toString()}>
          <Image
            source={
              item === "edit"
                ? require("@assets/images/edit.png")
                : item === "delete"
                ? require("@assets/images/delete.png")
                : item === "invoice"
                ? require("@assets/images/invoice.png")
                : require("@assets/images/opname.png")
            }
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TableColumnAction;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
});
