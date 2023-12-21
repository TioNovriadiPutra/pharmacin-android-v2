import { TableType } from "@utils/types/TableType";
import { atom } from "recoil";

const kelolaPembelianTableDataState = atom<TableType>({
  key: "kelolaPembelianTableDataState",
  default: {
    headers: ["No Invoice", "Nama Pabrik", "Tanggal", "Total Pembelian"],
    data: [
      {
        id: 1,
        item: [
          {
            label: "000000",
            type: "text",
          },
          {
            label: "Pharmacin",
            type: "text",
          },
          {
            label: "DD-MM-YYYY",
            type: "text",
          },
          {
            label: 20000000,
            type: "currency",
          },
        ],
      },
    ],
    tableAction: ["edit", "delete"],
  },
});

export { kelolaPembelianTableDataState };
