import { StyleSheet, View } from "react-native";
import React from "react";
import DashboardTable from "@components/intermediate/DashboardTable";
import { useRecoilValue } from "recoil";
import { dashboardTableDataState } from "@store/atom/dashboardState";

const DashboardContent = () => {
  const dashboardTableData = useRecoilValue(dashboardTableDataState);

  return (
    <View style={[styles.container, styles.mainContainer]}>
      <DashboardTable tableData={dashboardTableData[0]} />
      <View style={styles.container}>
        <DashboardTable tableData={dashboardTableData[1]} />
        <DashboardTable tableData={dashboardTableData[2]} />
      </View>
    </View>
  );
};

export default DashboardContent;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    gap: 14,
  },
});
