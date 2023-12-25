import { showDetailModalState } from "@store/atom/globalState";
import { colors } from "@themes/colors";
import { ENDPOINT, queryClient } from "@utils/config/Endpoint";
import { deleteFunction } from "@utils/helper/fetch";
import { showToast } from "@utils/helper/toast";
import { DetailDataType, MainDetailType, TableDataType, TableType } from "@utils/types/TableType";
import { selectorFamily } from "recoil";
import { setRecoil } from "recoil-nexus";

const pabrikanTableSelectorFamily = selectorFamily({
  key: "pabrikanTableSelectorFamily",
  get: (data?: any) => () => {
    if (!!data) {
      const tableData: TableType = {
        headers: ["ID", "Nama Pabrik", "Email", "Telepon"],
        data: data.data.map((item: any): { id: number; item: TableDataType[] } => {
          return {
            id: item.id,
            item: [
              {
                label: item.id,
                type: "text",
              },
              {
                label: item.factory_name,
                type: "text",
              },
              {
                label: item.factory_email,
                type: "text",
              },
              {
                label: item.factory_phone,
                type: "text",
              },
            ],
          };
        }),
        tableAction: [
          {
            type: "delete",
            onPress: (id: number) =>
              deleteFunction(`${ENDPOINT.factoryDefault}/${id}`, true)
                .then(() => {
                  queryClient.invalidateQueries({ queryKey: ["getClinicFactories"] });
                })
                .catch((error: any) => {
                  showToast("failed", error.error.message);
                }),
          },
        ],
        detailDest: "DetailPabrikan",
      };

      return tableData;
    }
  },
});

const pabrikanDetailSelectorFamily = selectorFamily({
  key: "pabrikanDetailSelectorFamily",
  get: (data?: any) => () => {
    if (!!data) {
      const pabrikanDetail: DetailDataType = {
        pageHeader: {
          title: data.data[0].factory_name,
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
            setRecoil(showDetailModalState, true);
          },
        },
        detailData: [
          {
            headers: ["Nama Obat", "Nama Generik", "Kategori", "Harga Beli", "Harga Jual", "Takaran", "Stock"],
            data: data.data[0].drugs.map((item: any): { id: number; item: TableDataType[] } => {
              return {
                id: item.id,
                item: [
                  {
                    label: item.name,
                    type: "text",
                  },
                  {
                    label: item.generic_name,
                    type: "text",
                  },
                  {
                    label: item.drugCategory.category_name,
                    type: "text",
                  },
                  {
                    label: item.purchase_price,
                    type: "currency",
                  },
                  {
                    label: item.selling_price,
                    type: "currency",
                  },
                  {
                    label: item.dose,
                    type: "text",
                  },
                  {
                    label: item.stock ? item.stock.total_stock : 0,
                    type: "text",
                  },
                ],
              };
            }),
          },
          {
            headers: ["Tanggal", "Nama Obat", "Nama Generik", "Kategori", "Harga Beli", "Jumlah"],
            data: [],
          },
        ],
      };

      return pabrikanDetail;
    }
  },
});

const pabrikanModalDetailSelectorFamily = selectorFamily({
  key: "pabrikanModalDetailSelectorFamily",
  get: (data?: any) => () => {
    if (!!data) {
      const modalDetail: MainDetailType = {
        statData: [
          {
            label: "Jenis Obat",
            stat: data.data[0].drugs.length,
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
            stat: data.data[0].purchaseTransactions.length,
            color: colors.LightGreen,
            textColor: colors.Primary,
          },
        ],
        detailData: [
          {
            label: "Pabrik",
            value: data.data[0].factory_name,
            type: "text",
          },
          {
            label: "Email",
            value: data.data[0].factory_email,
            type: "text",
          },
          {
            label: "Telepon",
            value: data.data[0].factory_phone,
            type: "text",
          },
        ],
      };

      return modalDetail;
    }
  },
});

export { pabrikanTableSelectorFamily, pabrikanDetailSelectorFamily, pabrikanModalDetailSelectorFamily };
