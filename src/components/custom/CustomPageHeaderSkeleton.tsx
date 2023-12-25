import { StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";
import { CustomHeader } from "@utils/types/HeaderType";

type Props = {
  headerData: CustomHeader;
};

const CustomPageHeaderSkeleton = ({ headerData }: Props) => {
  return (
    <View style={styles.container}>
      <Skeleton width={175} height={44} style={styles.item} />
      <View style={styles.functionContainer}>
        {headerData.function.map((item, index) => {
          if (item.type === "button") {
            return <Skeleton key={index.toString()} width={188} height={44} style={styles.item} />;
          } else if (item.type === "search") {
            return <Skeleton key={index.toString()} width={350} height={44} style={styles.item} />;
          }
        })}
      </View>
    </View>
  );
};

export default CustomPageHeaderSkeleton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    borderRadius: 10,
  },
  functionContainer: {
    flexDirection: "row",
    gap: 14,
  },
});
