import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { TableDataType } from "@utils/types/TableType";
import OpnameDateValid from "@components/custom/OpnameDateValid";
import TableColumn from "./TableColumn";
import TableColumnAction from "./TableColumnAction";

type Props = {
  contentData: { id: number; item: TableDataType[] }[];
  tableAction?: Array<"edit" | "delete" | "invoice" | "opname">;
  detailDest?: string;
  nav?: any;
};

const TableContent = ({ contentData, tableAction, detailDest, nav }: Props) => {
  const onDetailPress = (id: number) => {
    if (nav) {
      nav.navigate(detailDest, { itemId: id });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contentData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[styles.rowChild, { borderBottomWidth: contentData ? (contentData.length === 1 || index < contentData.length - 1 ? 1 : 0) : 0 }]}
            onPress={() => onDetailPress(item.id)}
          >
            {item.item.map((item, index) => {
              if (item.type === "opnameDate") {
                return <OpnameDateValid key={index.toString()} status={item.status} label={item.label as string} />;
              }

              return <TableColumn key={index.toString()} item={item} />;
            })}

            {tableAction && <TableColumnAction tableAction={tableAction} />}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TableContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  rowChild: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderBottomColor: colors.BorderTable,
  },
});
