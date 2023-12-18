import { StyleSheet, View } from "react-native";
import React from "react";
import { MainDetailDataType } from "@utils/types/TableType";
import DetailDataBox from "./DetailDataBox";

type Props = {
  detailData: MainDetailDataType[];
};

const DetailList = ({ detailData }: Props) => {
  return (
    <View style={styles.container}>
      {detailData.map((item, index) => (
        <DetailDataBox key={index.toString()} item={item} />
      ))}
    </View>
  );
};

export default DetailList;

const styles = StyleSheet.create({
  container: {
    gap: 14,
    flex: 1,
  },
});
