import { StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const CustomDashboardContentSkeleton = () => {
  return (
    <View style={[styles.container, styles.mainContainer]}>
      <Skeleton style={styles.item} />
      <View style={styles.container}>
        <Skeleton style={styles.item} />
        <Skeleton style={styles.item} />
      </View>
    </View>
  );
};

export default CustomDashboardContentSkeleton;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    gap: 14,
  },
  item: {
    flex: 1,
    borderRadius: 10,
  },
});
