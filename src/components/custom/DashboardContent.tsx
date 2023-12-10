import { StyleSheet, View } from "react-native";
import React from "react";
import DashboardTable from "@components/intermediate/DashboardTable";

const DashboardContent = () => {
  return (
    <View style={[styles.container, styles.mainContainer]}>
      <DashboardTable title="Penjualan Terakhir" />
      <View style={styles.container}>
        <DashboardTable title="Riwayat Kasir" />
        <DashboardTable title="Pembelian Terakhir" />
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
