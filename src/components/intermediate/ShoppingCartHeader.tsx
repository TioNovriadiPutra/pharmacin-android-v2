import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";

type Props = {
  headerData: string[];
};

const ShoppingCartHeader = ({ headerData }: Props) => {
  return (
    <View style={styles.container}>
      {headerData.map((item, index) => (
        <Text key={index.toString()} style={[styles.label, sizeType.H3, { flex: index === 0 ? 2 : 1 }]}>
          {item}
        </Text>
      ))}
    </View>
  );
};

export default ShoppingCartHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PageDefault,
    paddingHorizontal: 20,
    paddingVertical: 17,
    flexDirection: "row",
    alignItems: "center",
    gap: 60,
    borderRadius: 10,
  },
  label: {
    color: colors.TableHead,
  },
});
