import { DashboardStatType } from "@utils/types/DashboardStateType";
import { CustomHeader } from "@utils/types/HeaderType";
import { atom } from "recoil";

const dashboardHeaderState = atom<CustomHeader>({
  key: "dashboardHeaderState",
  default: {
    title: "Dashboard",
    function: [
      {
        type: "button",
        functionItem: {
          label: "Buka Kasir",
          btnType: "SUCCESS",
        },
      },
    ],
  },
});

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

export { dashboardHeaderState, dashboardStatState };
