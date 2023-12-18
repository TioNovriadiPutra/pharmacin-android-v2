import { TableType } from "@utils/types/TableType";
import { atom } from "recoil";

const kategoriObatTableDataState = atom<TableType>({
  key: "kategoriObatTableDataState",
  default: {
    headers: ["ID", "Nama Kategori"],
    data: [
      {
        id: 1,
        item: [
          {
            label: "000000",
            type: "text",
          },
          {
            label: "Obat Keras",
            type: "text",
          },
        ],
      },
    ],
    tableAction: ["edit", "delete"],
  },
});

const kelolaObatTableDataState = atom<TableType>({
  key: "kelolaObatTableDataState",
  default: {
    headers: ["Nama Obat", "Nama Generik", "Kategori", "Rak", "Harga Beli", "Harga Jual", "Takaran"],
    data: [
      {
        id: 1,
        item: [
          {
            label: "ALANGSARI PLUS",
            type: "text",
          },
          {
            label: "Lorem Ipsum",
            type: "text",
          },
          {
            label: "Lorem Ipsum",
            type: "text",
          },
          {
            label: 2,
            type: "quantity",
          },
          {
            label: 22000,
            type: "currency",
          },
          {
            label: 22000,
            type: "currency",
          },
          {
            label: "125ml",
            type: "text",
          },
        ],
      },
    ],
    tableAction: ["edit", "delete"],
    detailDest: "DetailObat",
  },
});

const obatShowAddModalState = atom<boolean>({
  key: "showAddObatModalState",
  default: false,
});

const obatShowDetailModalState = atom<boolean>({
  key: "obatShowDetailModalState",
  default: false,
});

const obatDetailActiveScreenState = atom<number>({
  key: "obatDetailActiveScreenState",
  default: 0,
});

export { kategoriObatTableDataState, obatShowAddModalState, kelolaObatTableDataState, obatDetailActiveScreenState, obatShowDetailModalState };
