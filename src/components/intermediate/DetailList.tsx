import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { MainDetailDataType } from "@utils/types/TableType";
import DetailDataBox from "./DetailDataBox";

type Props = {
  detailData: MainDetailDataType[];
};

const DetailList = ({ detailData }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList data={detailData} keyExtractor={(_, index) => index.toString()} contentContainerStyle={styles.list} renderItem={({ item }) => <DetailDataBox item={item} />} />
      {detailData.map((item, index) => (
        <DetailDataBox key={index.toString()} item={item} />
      ))}
    </View>
  );
};

export default DetailList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    gap: 14,
  },
});
