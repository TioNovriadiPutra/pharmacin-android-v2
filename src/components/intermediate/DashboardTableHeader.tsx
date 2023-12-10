import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";

const DashboardTableHeader = () => {
  return (
    <View style={styles.container}>
      <Text>DashboardTableHeader</Text>
    </View>
  );
};

export default DashboardTableHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 27,
    paddingVertical: 17,
    backgroundColor: colors.PageDefault,
    borderRadius: 10,
    marginTop: 21,
  },
});
