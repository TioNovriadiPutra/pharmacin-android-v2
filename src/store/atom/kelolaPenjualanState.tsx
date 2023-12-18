import { TableType } from "@utils/types/TableType";
import { atom } from "recoil";

const penjualanTableDataState = atom<TableType>({
  key: "penjualanTableDataState",
  default: {
    headers: ["Tanggal", "No Invoice", "Nama Pelanggan", "Total Pembelian"],
    data: [
      {
        id: 1,
        item: [
          {
            label: "DD-MM-YYYY",
            type: "text",
          },
          {
            label: "000000",
            type: "text",
          },
          {
            label: "Lorem Ipsum",
            type: "text",
          },
          {
            label: "Total Pembelian",
            type: "currency",
          },
        ],
      },
    ],
    tableAction: ["invoice", "delete"],
  },
});

export { penjualanTableDataState };
