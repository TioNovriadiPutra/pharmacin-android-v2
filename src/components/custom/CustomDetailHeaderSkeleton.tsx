import { StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const CustomDetailHeaderSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton height={44} style={styles.container} />
      <View style={styles.function}>
        <Skeleton style={styles.btn} height={44} />
        <Skeleton style={styles.btn} height={44} />
        <Skeleton width={350} height={44} style={styles.search} />
      </View>
    </View>
  );
};

export default CustomDetailHeaderSkeleton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    gap: 14,
  },
  function: {
    flexDirection: "row",
    gap: 14,
  },
  btn: {
    flex: 1,
    borderRadius: 10,
  },
  search: {
    borderRadius: 10,
  },
});
