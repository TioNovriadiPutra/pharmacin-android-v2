import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts, sizeType } from "@themes/fonts";
import DashboardTableHeader from "./DashboardTableHeader";

type Props = {
  title: string;
};

const DashboardTable = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={[styles.btn, sizeType.Button]}>Lihat Semua {`>>`}</Text>
        </TouchableOpacity>
      </View>
      <DashboardTableHeader />
    </View>
  );
};

export default DashboardTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 24,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: colors.Black,
    fontFamily: fonts.SemiBold,
    fontSize: 18,
  },
  btn: {
    color: colors.Primary,
  },
});
