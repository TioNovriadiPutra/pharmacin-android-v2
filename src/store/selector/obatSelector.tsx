import { kelolaObatTableDataState, obatShowDetailModalState } from "@store/atom/obatState";
import { colors } from "@themes/colors";
import { DetailDataType, MainDetailType } from "@utils/types/TableType";
import { selectorFamily } from "recoil";
import { setRecoil } from "recoil-nexus";

const obatMainDetailDataFamily = selectorFamily({
  key: "obatMainDetailDataFamily",
  get:
    (itemId: number) =>
    ({ get }) => {
      const obatData = get(kelolaObatTableDataState);
      const findObatDetail = obatData.data.find((element) => element.id === itemId);

      const obatMainDetail: MainDetailType = {
        statData: [
          {
            label: "Stock",
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
            label: "Nama Obat",
            value: findObatDetail?.item[0].label,
            type: "text",
          },
          {
            label: "Nama Generik",
            value: findObatDetail?.item[1].label,
            type: "text",
          },
          {
            label: "Takaran",
            value: findObatDetail?.item[6].label,
            type: "text",
          },
          {
            label: "Kategori",
            value: "Lorem Ipsum",
            type: "text",
          },
          {
            label: "Rak",
            value: findObatDetail?.item[3].label,
            type: "text",
          },
          {
            label: "Harga Beli Pabrikan",
            value: findObatDetail?.item[4].label,
            type: "currency",
          },
          {
            label: "Harga Jual",
            value: findObatDetail?.item[5].label,
            type: "currency",
          },
        ],
      };

      return obatMainDetail;
    },
});

const obatDetailDataFamily = selectorFamily({
  key: "obatDetailDataFamily",
  get:
    (itemId: number) =>
    ({ get }) => {
      const obatData = get(kelolaObatTableDataState);
      const findObatDetail = obatData.data.find((element) => element.id === itemId);

      const obatDetail: DetailDataType = {
        pageHeader: {
          title: findObatDetail ? (findObatDetail.item[0].label as string) : "Unknown",
          function: [
            {
              type: "switch",
              functionItem: {
                items: [
                  {
                    label: "Pembelian Obat",
                  },
                  {
                    label: "Penjualan Obat",
                  },
                ],
              },
            },
            {
              type: "search",
              functionItem: {
                name: "obatDetailSearch",
                defaultValue: undefined,
                type: "text",
                placeholder: "Cari disini...",
              },
            },
          ],
          type: "detail",
          onPress: () => {
            setRecoil(obatShowDetailModalState, true);
          },
        },
        detailData: [
          {
            headers: ["Tanggal", "No Invoice", "Jumlah", "Harga Beli", "Total"],
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
                    label: 5,
                    type: "quantity",
                  },
                  {
                    label: 100000,
                    type: "currency",
                  },
                  {
                    label: 500000,
                    type: "currency",
                  },
                ],
              },
            ],
          },
          {
            headers: ["Tanggal", "No Invoice", "Nama Pelanggan", "Jumlah", "Harga Beli", "Total"],
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
                    label: "Tio Novriadi Putra",
                    type: "text",
                  },
                  {
                    label: 5,
                    type: "quantity",
                  },
                  {
                    label: 100000,
                    type: "currency",
                  },
                  {
                    label: 500000,
                    type: "currency",
                  },
                ],
              },
            ],
          },
        ],
      };

      return obatDetail;
    },
});

export { obatDetailDataFamily, obatMainDetailDataFamily };
