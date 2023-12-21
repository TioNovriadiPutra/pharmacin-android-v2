import { StyleSheet, View } from "react-native";
import React from "react";
import { Skeleton } from "@rneui/themed";

const CustomProfileSkeletonPlaceholder = () => {
  return (
    <View style={styles.container}>
      <Skeleton width={42} height={42} circle />
      <Skeleton style={{ flex: 1 }} height={42} />
      <Skeleton width={10} height={24} />
    </View>
  );
};

export default CustomProfileSkeletonPlaceholder;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 13,
    gap: 13,
  },
});
