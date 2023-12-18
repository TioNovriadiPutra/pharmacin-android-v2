import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";

type Props = {
  itemName: string;
  type: "detail" | "opname";
  onPress?: any;
};

const DetailHeader = ({ itemName, type, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <BackButton style={styles.back} />
      <Text style={[styles.title, sizeType.H3]}>{itemName}</Text>
      <TouchableOpacity onPress={onPress}>
        <Image source={type === "detail" ? require("@assets/images/detail.png") : require("@assets/images/opnameDetail.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  back: {
    position: "relative",
  },
  title: {
    color: colors.Black,
  },
});
