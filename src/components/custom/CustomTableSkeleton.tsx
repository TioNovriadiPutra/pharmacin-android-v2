import { StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const CustomTableSkeleton = () => {
  return (
    <View style={styles.container}>
      <Skeleton height={54} style={styles.header} />
      <Skeleton style={styles.table} />
    </View>
  );
};

export default CustomTableSkeleton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 14,
  },
  header: {
    borderRadius: 10,
  },
  table: {
    flex: 1,
    borderRadius: 10,
  },
});
