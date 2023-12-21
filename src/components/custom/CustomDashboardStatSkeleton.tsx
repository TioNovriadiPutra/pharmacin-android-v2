import { StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const CustomDashboardStatSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton style={styles.item} height={112} />
      <Skeleton style={styles.item} height={112} />
      <Skeleton style={styles.item} height={112} />
      <Skeleton style={styles.item} height={112} />
    </View>
  );
};

export default CustomDashboardStatSkeleton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
  },
  item: {
    flex: 1,
    borderRadius: 10,
  },
});
