import { StyleSheet, View } from "react-native";
import React from "react";
import DashboardTable from "@components/intermediate/DashboardTable";
import { useRecoilValue } from "recoil";
import { dashboardTableSelectorFamily } from "@store/selector/dashboardSelector";

type Props = {
  data?: Array<any>;
};

const DashboardContent = ({ data }: Props) => {
  const dashboardTableData = useRecoilValue(dashboardTableSelectorFamily(data));

  return (
    <View style={[styles.container, styles.mainContainer]}>
      {dashboardTableData && <DashboardTable tableData={dashboardTableData[0]} />}
      <View style={styles.container}>
        {dashboardTableData && <DashboardTable tableData={dashboardTableData[1]} />}
        {dashboardTableData && <DashboardTable tableData={dashboardTableData[2]} />}
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
