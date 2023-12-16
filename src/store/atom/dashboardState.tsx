import { DashboardStatType, DashboardTableDataType } from "@utils/types/DashboardType";
import { atom } from "recoil";

const dashboardStatState = atom<DashboardStatType[]>({
  key: "dashboardStatState",
  default: [
    {
      title: "Total Transaksi Jual",
      icon: require("@assets/images/sellTransaction.png"),
      stat: 190,
      type: "number",
    },
    {
      title: "Total Penjualan",
      icon: require("@assets/images/sellTotal.png"),
      stat: 1000000,
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
      stat: 421,
      type: "number",
    },
  ],
});

const dashboardTableDataState = atom<DashboardTableDataType[]>({
  key: "dashboardTableDataState",
  default: [
    {
      title: "Penjualan Terakhir",
      destination: {
        parent: "Penjualan",
        child: "KelolaPenjualan",
      },
      headers: ["No Invoice", "Total"],
    },
    {
      title: "Riwayat Kasir",
      destination: {
        parent: "Manajemen",
        child: "RiwayatKasirManajemen",
      },
      headers: ["Tanggal", "Buka", "Tutup"],
    },
    {
      title: "Pembelian Terakhir Terakhir",
      destination: {
        parent: "Pembelian",
        child: "KelolaPembelian",
      },
      headers: ["No Invoice", "Total"],
    },
  ],
});

const cashierStatusState = atom<boolean>({
  key: "cashierStatusState",
  default: false,
});

export { dashboardStatState, dashboardTableDataState, cashierStatusState };
