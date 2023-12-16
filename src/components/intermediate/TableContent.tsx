import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { TableDataType } from "@utils/types/TableType";
import { sizeType } from "@themes/fonts";

type Props = {
  contentData: { id: number; item: TableDataType[] }[];
  tableAction?: ["edit", "delete"];
  detailDest?: string;
  nav: any;
};

const TableContent = ({ contentData, tableAction, detailDest, nav }: Props) => {
  const onDetailPress = (id: number) => {
    nav.navigate(detailDest, { itemId: id });
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
            {item.item.map((item, index) => (
              <Text key={index.toString()} style={[styles.column, sizeType.BodyText]}>
                {item.label}
              </Text>
            ))}

            {tableAction && (
              <View style={styles.actionContainer}>
                {tableAction.map((item, index) => (
                  <TouchableOpacity key={index.toString()}>
                    <Image source={item === "edit" ? require("@assets/images/edit.png") : require("@assets/images/delete.png")} />
                  </TouchableOpacity>
                ))}
              </View>
            )}
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
  column: {
    flex: 1,
    textAlign: "center",
    color: colors.Black,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
});
