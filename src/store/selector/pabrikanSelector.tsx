import { pabrikanTableDataState } from "@store/atom/pabrikanState";
import { PabrikanDetailType } from "@utils/types/PabrikanType";
import { selectorFamily } from "recoil";

const pabrikanDetailDataFamily = selectorFamily({
  key: "pabrikanDetailDataState",
  get:
    (itemId: number) =>
    ({ get }) => {
      const pabrikanData = get(pabrikanTableDataState);

      const findPabrikDetail = pabrikanData.data.find((element) => element.id === itemId);

      const pabrikDetail: PabrikanDetailType = {
        name: findPabrikDetail ? (findPabrikDetail.item[1].label as string) : "Unknown",
        functions: [
          {
            label: "Jenis Obat",
          },
          {
            label: "Pembelian Obat",
          },
        ],
        searchData: {
          name: "detailSearch",
          defaultValue: null,
          type: "text",
          placeholder: "Cari disini...",
        },
      };

      return pabrikDetail;
    },
});

export { pabrikanDetailDataFamily };
