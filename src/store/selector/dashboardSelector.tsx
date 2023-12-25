import { countStat, countStatStock } from "@utils/helper/count";
import { DashboardStatType, DashboardTableDataType } from "@utils/types/DashboardType";
import { TableDataType } from "@utils/types/TableType";
import { selectorFamily } from "recoil";

const dashboardStatSelectorFamily = selectorFamily({
  key: "dashboardStatSelector",
  get: (data?: any[]) => () => {
    if (data) {
      const statData: DashboardStatType[] = [
        {
          title: "Total Transaksi Jual",
          icon: require("@assets/images/sellTransaction.png"),
          stat: data[0].sellingTransactions.length,
          type: "number",
        },
        {
          title: "Total Penjualan",
          icon: require("@assets/images/sellTotal.png"),
          stat: countStat(data[0].sellingTransactions),
          type: "currency",
        },
        {
          title: "Kadaluarsa",
          icon: require("@assets/images/expired.png"),
          stat: 33,
          type: "number",
        },
        {
          title: "Stock Menipis",
          icon: require("@assets/images/lowStock.png"),
          stat: countStatStock(data[0].stocks),
          type: "number",
        },
      ];

      return statData;
    }
  },
});

const dashboardTableSelectorFamily = selectorFamily({
  key: "dashboardTableSelectorFamily",
  get: (data?: any) => () => {
    if (data) {
      const tableData: DashboardTableDataType[] = [
        {
          title: "Penjualan Terakhir",
          destination: {
            parent: "Penjualan",
            child: "KelolaPenjualan",
          },
          headers: ["No Invoice", "Total"],
          data: data[0].sellingTransactions.map((item: any): { id: number; item: TableDataType[] } => {
            return {
              id: item.id,
              item: [
                {
                  label: "000000",
                  type: "text",
                },
                {
                  label: item.total_price,
                  type: "currency",
                },
              ],
            };
          }),
        },
        {
          title: "Riwayat Kasir",
          destination: {
            parent: "Manajemen",
            child: "RiwayatKasirManajemen",
          },
          headers: ["Tanggal", "Buka", "Tutup"],
          data: [],
        },
        {
          title: "Pembelian Terakhir Terakhir",
          destination: {
            parent: "Pembelian",
            child: "KelolaPembelian",
          },
          headers: ["No Invoice", "Total"],
          data: [],
        },
      ];

      return tableData;
    }
  },
});

export { dashboardStatSelectorFamily, dashboardTableSelectorFamily };
