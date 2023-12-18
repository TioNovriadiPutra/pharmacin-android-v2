import { StyleSheet, View } from "react-native";
import React from "react";
import { MainDetailStatType } from "@utils/types/TableType";
import ModalStat from "@components/custom/ModalStat";

type Props = {
  detailStat: MainDetailStatType[];
};

const DetailFooter = ({ detailStat }: Props) => {
  return (
    <View style={styles.container}>
      {detailStat.map((item, index) => (
        <ModalStat key={index.toString()} item={item} />
      ))}
    </View>
  );
};

export default DetailFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 21,
  },
});
