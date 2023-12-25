import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { TableActionType } from "@utils/types/TableType";

type Props = {
  tableAction: TableActionType[];
  itemId: number;
};

const TableColumnAction = ({ tableAction, itemId }: Props) => {
  return (
    <View style={styles.container}>
      {tableAction.map((item, index) => (
        <TouchableOpacity key={index.toString()} onPress={() => item.onPress(itemId)}>
          <Image
            source={
              item.type === "edit"
                ? require("@assets/images/edit.png")
                : item.type === "delete"
                ? require("@assets/images/delete.png")
                : item.type === "invoice"
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
