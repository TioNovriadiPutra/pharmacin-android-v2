import { pabrikanShowDetailModalState, pabrikanTableDataState } from "@store/atom/pabrikanState";
import { colors } from "@themes/colors";
import { DetailDataType, MainDetailType } from "@utils/types/TableType";
import { selectorFamily } from "recoil";
import { setRecoil } from "recoil-nexus";

const pabrikanMainDetailDataFamily = selectorFamily({
  key: "pabrikanMainDetailDataFamily",
  get:
    (itemId: number) =>
    ({ get }) => {
      const pabrikanData = get(pabrikanTableDataState);
      const findPabrikDetail = pabrikanData.data.find((element) => element.id === itemId);

      const pabrikMainDetail: MainDetailType = {
        statData: [
          {
            label: "Jenis Obat",
            stat: 1000,
            color: colors.LightRed,
            textColor: colors.Danger,
          },
          {
            label: "Total Penjualan",
            stat: 1000,
            color: colors.WhiteBlue,
            textColor: colors.Secondary,
          },
          {
            label: "Total Pembelian",
            stat: 1000,
            color: colors.LightGreen,
            textColor: colors.Primary,
          },
        ],
        detailData: [
          {
            label: "Pabrik",
            value: findPabrikDetail?.item[1].label,
            type: "text",
          },
          {
            label: "Email",
            value: findPabrikDetail?.item[2].label,
            type: "text",
          },
          {
            label: "Telepon",
            value: findPabrikDetail?.item[3].label,
            type: "text",
          },
        ],
      };

      return pabrikMainDetail;
    },
});

const pabrikanDetailDataFamily = selectorFamily({
  key: "pabrikanDetailDataState",
  get:
    (itemId: number) =>
    ({ get }) => {
      const pabrikanData = get(pabrikanTableDataState);

      const findPabrikDetail = pabrikanData.data.find((element) => element.id === itemId);

      const pabrikDetail: DetailDataType = {
        pageHeader: {
          title: findPabrikDetail ? (findPabrikDetail.item[1].label as string) : "Unknown",
          function: [
            {
              type: "switch",
              functionItem: {
                items: [
                  {
                    label: "Jenis Obat",
                  },
                  {
                    label: "Pembelian Obat",
                  },
                ],
              },
            },
            {
              type: "search",
              functionItem: {
                name: "pabrikanDetailSearch",
                defaultValue: undefined,
                type: "text",
                placeholder: "Cari disini...",
              },
            },
          ],
          type: "detail",
          onPress: () => {
            setRecoil(pabrikanShowDetailModalState, true);
          },
        },
        detailData: [
          {
            headers: ["Nama Obat", "Nama Generik", "Kategori", "Harga Beli", "Harga Jual", "Takaran", "Stock"],
            data: [
              {
                id: 1,
                item: [
                  {
                    label: "Lorem Ipsum",
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
                    label: 100000000,
                    type: "currency",
                  },
                  {
                    label: 100000000,
                    type: "currency",
                  },
                  {
                    label: "125ml",
                    type: "text",
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
            headers: ["Tanggal", "Nama Obat", "Nama Generik", "Kategori", "Harga Beli", "Jumlah"],
            data: [
              {
                id: 1,
                item: [
                  {
                    label: "DD-MM-YYYY",
                    type: "text",
                  },
                  {
                    label: "Lorem Ipsum",
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
                    label: 100000000,
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
        ],
      };

      return pabrikDetail;
    },
});

export { pabrikanDetailDataFamily, pabrikanMainDetailDataFamily };
