import { StyleSheet, View } from "react-native";
import React from "react";
import DashboardStatItem from "@components/intermediate/DashboardStatItem";
import { useRecoilValue } from "recoil";
import { dashboardStatSelectorFamily } from "@store/selector/dashboardSelector";

type Props = {
  data?: Array<any>;
};

const DashboardStat = ({ data }: Props) => {
  const statData = useRecoilValue(dashboardStatSelectorFamily(data));

  return <View style={styles.container}>{statData && statData.map((item, index) => <DashboardStatItem key={index.toString()} statData={item} />)}</View>;
};

export default DashboardStat;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
  },
});
