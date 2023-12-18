import { SwitchTableType, TableType } from "@utils/types/TableType";
import { atom } from "recoil";

const stockActiveScreenState = atom<number>({
  key: "stockActiveScreenState",
  default: 0,
});

const stockTableDataState = atom<SwitchTableType>({
  key: "stockTableDataState",
  default: {
    screenData: [
      {
        headers: ["Item", "Nama Pabrik", "Kategori", "Harga Beli", "Harga Jual", "Stock"],
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
                label: 222000000,
                type: "currency",
              },
              {
                label: 222000000,
                type: "currency",
              },
              {
                label: 100,
                type: "quantity",
              },
            ],
          },
          {
            id: 2,
            item: [
              {
                label: "ALANGSARI PLUS JERUK MANIS SACH 6 SACHET",
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
                label: 222000000,
                type: "currency",
              },
              {
                label: 222000000,
                type: "currency",
              },
              {
                label: 100,
                type: "quantity",
              },
            ],
          },
        ],
      },
      {
        headers: ["Item", "Nama Pabrik", "Batch ID", "Kadaluarsa", "Stock Beli", "Terjual", "Stock"],
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
                label: "XXXXXXX",
                type: "text",
              },
              {
                label: "DD-MM-YYYY",
                type: "text",
              },
              {
                label: 222000,
                type: "quantity",
              },
              {
                label: 1000,
                type: "quantity",
              },
              {
                label: 221000,
                type: "quantity",
              },
            ],
          },
          {
            id: 2,
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
                label: "XXXXXXX",
                type: "text",
              },
              {
                label: "DD-MM-YYYY",
                type: "text",
              },
              {
                label: 222000,
                type: "quantity",
              },
              {
                label: 1000,
                type: "quantity",
              },
              {
                label: 221000,
                type: "quantity",
              },
            ],
          },
          {
            id: 3,
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
                label: "XXXXXXX",
                type: "text",
              },
              {
                label: "DD-MM-YYYY",
                type: "text",
              },
              {
                label: 222000,
                type: "quantity",
              },
              {
                label: 1000,
                type: "quantity",
              },
              {
                label: 221000,
                type: "quantity",
              },
            ],
          },
          {
            id: 4,
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
                label: "XXXXXXX",
                type: "text",
              },
              {
                label: "DD-MM-YYYY",
                type: "text",
              },
              {
                label: 222000,
                type: "quantity",
              },
              {
                label: 1000,
                type: "quantity",
              },
              {
                label: 221000,
                type: "quantity",
              },
            ],
          },
          {
            id: 5,
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
                label: "XXXXXXX",
                type: "text",
              },
              {
                label: "DD-MM-YYYY",
                type: "text",
              },
              {
                label: 222000,
                type: "quantity",
              },
              {
                label: 1000,
                type: "quantity",
              },
              {
                label: 221000,
                type: "quantity",
              },
            ],
          },
          {
            id: 6,
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
                label: "XXXXXXX",
                type: "text",
              },
              {
                label: "DD-MM-YYYY",
                type: "text",
              },
              {
                label: 222000,
                type: "quantity",
              },
              {
                label: 1000,
                type: "quantity",
              },
              {
                label: 221000,
                type: "quantity",
              },
            ],
          },
        ],
      },
    ],
  },
});

const opnameTableDataState = atom<TableType>({
  key: "opnameTableDataState",
  default: {
    headers: ["Item", "Kategori", "Tgl. Terakhir", "Stock", "Harga Beli"],
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
            label: "DD-MM-YYYY",
            type: "opnameDate",
            status: false,
          },
          {
            label: 100,
            type: "quantity",
          },
          {
            label: 222000000,
            type: "currency",
          },
        ],
      },
      {
        id: 2,
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
            label: "DD-MM-YYYY",
            type: "opnameDate",
            status: true,
          },
          {
            label: 100,
            type: "quantity",
          },
          {
            label: 222000000,
            type: "currency",
          },
        ],
      },
      {
        id: 3,
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
            label: "DD-MM-YYYY",
            type: "opnameDate",
            status: true,
          },
          {
            label: 100,
            type: "quantity",
          },
          {
            label: 222000000,
            type: "currency",
          },
        ],
      },
    ],
    tableAction: ["opname"],
    detailDest: "DetailOpnameStock",
  },
});

export { stockActiveScreenState, stockTableDataState, opnameTableDataState };
