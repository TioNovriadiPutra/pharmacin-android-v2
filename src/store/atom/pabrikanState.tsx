import { TableType } from "@utils/types/TableType";
import { atom } from "recoil";

const pabrikanShowAddModalState = atom<boolean>({
  key: "pabrikanShowAddModalState",
  default: false,
});

const pabrikanTableDataState = atom<TableType>({
  key: "pabrikanTableDataState",
  default: {
    headers: ["ID", "Nama Pabrik", "Email", "Telepon"],
    data: [
      {
        id: 1,
        item: [
          {
            label: "000000",
            type: "text",
          },
          {
            label: "Test Nama Pabrik",
            type: "text",
          },
          {
            label: "test@gmail.com",
            type: "text",
          },
          {
            label: "081234567890",
            type: "text",
          },
        ],
      },
      {
        id: 2,
        item: [
          {
            label: "000000",
            type: "text",
          },
          {
            label: "Test Nama Pabrik 2",
            type: "text",
          },
          {
            label: "test@gmail.com",
            type: "text",
          },
          {
            label: "081234567890",
            type: "text",
          },
        ],
      },
    ],
    tableAction: ["edit", "delete"],
    detailDest: "DetailPabrikan",
  },
});

const pabrikanDetailActiveScreenState = atom<number>({
  key: "pabrikanDetailActiveScreenState",
  default: 0,
});

export { pabrikanTableDataState, pabrikanShowAddModalState, pabrikanDetailActiveScreenState };
