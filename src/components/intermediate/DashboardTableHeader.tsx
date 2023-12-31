import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";

type Props = {
  headerData: string[];
};

const DashboardTableHeader = ({ headerData }: Props) => {
  return (
    <View style={styles.container}>
      {headerData.map((item, index) => (
        <Text key={index.toString()} style={[styles.label, sizeType.H3]}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export default DashboardTableHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 27,
    paddingVertical: 17,
    backgroundColor: colors.PageDefault,
    borderRadius: 10,
    marginTop: 21,
  },
  label: {
    flex: 1,
    textAlign: "center",
    color: colors.TableHead,
  },
});
