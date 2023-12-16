import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";

type Props = {
  headerData: string[];
  withAction?: boolean;
};

const TableHeader = ({ headerData, withAction = false }: Props) => {
  return (
    <View style={styles.container}>
      {headerData.map((item, index) => (
        <Text key={index.toString()} style={[styles.label, sizeType.H3]}>
          {item}
        </Text>
      ))}

      {withAction && <Text style={[styles.label, sizeType.H3]}>Tindakan</Text>}
    </View>
  );
};

export default TableHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 17,
    borderRadius: 10,
  },
  label: {
    flex: 1,
    textAlign: "center",
    color: colors.TableHead,
  },
});
