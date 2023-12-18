import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { TableType } from "@utils/types/TableType";
import PageTable from "./PageTable";
import { WIDTH } from "@themes/styles";

type Props = {
  tableContents: TableType[];
  pageRef: React.MutableRefObject<FlatList | null> | null;
};

const DetailTableContent = ({ tableContents, pageRef }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        ref={pageRef}
        data={tableContents}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.page}>
            <PageTable tableData={item} />
          </View>
        )}
      />
    </View>
  );
};

export default DetailTableContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width: WIDTH - 96,
  },
});
