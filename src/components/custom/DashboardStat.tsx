import { StyleSheet, View } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { dashboardStatState } from "@store/atom/dashboardState";
import DashboardStatItem from "@components/intermediate/DashboardStatItem";

const DashboardStat = () => {
  const dashboardState = useRecoilValue(dashboardStatState);

  return (
    <View style={styles.container}>
      {dashboardState.map((item, index) => (
        <DashboardStatItem key={index.toString()} statData={item} />
      ))}
    </View>
  );
};

export default DashboardStat;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
  },
});
