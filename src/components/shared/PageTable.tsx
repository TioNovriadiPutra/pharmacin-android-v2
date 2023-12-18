import { StyleSheet, View } from "react-native";
import React from "react";
import { TableType } from "@utils/types/TableType";
import TableHeader from "@components/intermediate/TableHeader";
import TableContent from "@components/intermediate/TableContent";

type Props = {
  tableData: TableType;
  nav?: any;
};

const PageTable = ({ tableData, nav }: Props) => {
  return (
    <View style={styles.container}>
      <TableHeader headerData={tableData.headers} withAction={!!tableData.tableAction} />
      <TableContent contentData={tableData.data} tableAction={tableData.tableAction} detailDest={tableData.detailDest} nav={nav} />
    </View>
  );
};

export default PageTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 14,
  },
});
