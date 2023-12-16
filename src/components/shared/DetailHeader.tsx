import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BackButton from "./BackButton";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";

type Props = {
  itemName: string;
};

const DetailHeader = ({ itemName }: Props) => {
  return (
    <View style={styles.container}>
      <BackButton style={styles.back} />
      <Text style={[styles.title, sizeType.H3]}>{itemName}</Text>
      <TouchableOpacity>
        <Image source={require("@assets/images/detail.png")} />
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
