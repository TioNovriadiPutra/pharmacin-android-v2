import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DashboardStatType } from "@utils/types/DashboardStateType";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";
import { formatCurrency } from "react-native-format-currency";

type Props = {
  statData: DashboardStatType;
};

const DashboardStatItem = ({ statData }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.statDesc}>
        <Text style={[styles.title, sizeType.H4]}>{statData.title}</Text>
        <Text style={[styles.stat, sizeType.Button]}>{statData.type === "number" ? statData.stat : formatCurrency({ amount: statData.stat, code: "IDR" })[0]}</Text>
      </View>
      <Image source={statData.icon} />
    </View>
  );
};

export default DashboardStatItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 28,
  },
  statDesc: {
    gap: 11,
    flex: 1,
  },
  title: {
    color: colors.StatLabel,
  },
  stat: {
    color: colors.Black,
  },
});
