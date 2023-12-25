import { editFromState, modalValidationErrorState, showAddModalState, showDetailModalState } from "@store/atom/globalState";
import { colors } from "@themes/colors";
import { ENDPOINT, queryClient } from "@utils/config/Endpoint";
import { deleteFunction, getFunction, postFunction, updateFunction } from "@utils/helper/fetch";
import { showToast } from "@utils/helper/toast";
import { FormType } from "@utils/types/FormType";
import { DropdownItem } from "@utils/types/InputType";
import { DetailDataType, MainDetailType, TableDataType, TableType } from "@utils/types/TableType";
import { selector, selectorFamily } from "recoil";
import { setRecoil } from "recoil-nexus";

const kategoriObatTableSelectorFamily = selectorFamily({
  key: "kategoriObatTableSelectorFamily",
  get: (data?: any) => () => {
    if (!!data) {
      const tableData: TableType = {
        headers: ["ID", "Nama Kategori"],
        data: data.data.map((item: any): { id: number; item: TableDataType[] } => {
          return {
            id: item.id,
            item: [
              {
                label: item.id,
                type: "text",
              },
              {
                label: item.category_name,
                type: "text",
              },
            ],
          };
        }),
        tableAction: [
          {
            type: "edit",
            onPress: (id: number) => {
              getFunction(`${ENDPOINT.drugCategoryDefault}/${id}`, true).then((dataFetch) => {
                const editData: FormType = {
                  title: "Edit Kategori",
                  inputs: [
                    [
                      {
                        name: "categoryName",
                        defaultValue: dataFetch.data.category_name,
                        placeholder: "Nama Kategori",
                        placeholderPosition: "out",
                        type: "text",
                      },
                    ],
                  ],
                  submitButton: {
                    label: "Edit Kategori",
                    btnType: "PRIMARY",
                    onPress: (data: any) => {
                      updateFunction(`${ENDPOINT.drugCategoryDefault}/${dataFetch.data.id}`, data, true)
                        .then(() => {
                          setRecoil(showAddModalState, false);
                          setRecoil(editFromState, null);
                          queryClient.invalidateQueries({ queryKey: ["getClinicDrugCategories"] });
                        })
                        .catch((error: any) => {
                          setRecoil(modalValidationErrorState, error);
                        });
                    },
                  },
                };

                setRecoil(editFromState, editData);
                setRecoil(showAddModalState, true);
              });
            },
          },
          {
            type: "delete",
            onPress: (id: number) => {
              deleteFunction(`${ENDPOINT.drugCategoryDefault}/${id}`, true)
                .then(() => {
                  queryClient.invalidateQueries({ queryKey: ["getClinicDrugCategories"] });
                })
                .catch((error: any) => {
                  showToast("failed", error.error.message);
                });
            },
          },
        ],
      };

      return tableData;
    }
  },
});

const obatTableSelectorFamily = selectorFamily({
  key: "obatTableSelectorFamily",
  get: (data?: any) => () => {
    if (!!data) {
      const tableData: TableType = {
        headers: ["Nama Item", "Nama Generik", "Kategori", "Rak", "Harga Beli", "Harga Jual", "Takaran"],
        data: data.data.map((item: any): { id: number; item: TableDataType[] } => {
          return {
            id: item.id,
            item: [
              {
                label: item.name,
                type: "text",
              },
              {
                label: item.generic_name || "-",
                type: "text",
              },
              {
                label: item.drugCategory.category_name,
                type: "text",
              },
              {
                label: item.shelve,
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
            ],
          };
        }),
        tableAction: [
          {
            type: "edit",
            onPress: (id: number) => {
              getFunction(`${ENDPOINT.drugDefault}/${id}`, true).then(async (dataFetch) => {
                const kategoriObatData = await getFunction(ENDPOINT.drugCategoryDefault, true).then((data: any) => {
                  const dropdown: DropdownItem[] = data.data.map((item: any) => {
                    return {
                      label: item.category_name,
                      value: item.id,
                    };
                  });

                  return dropdown;
                });

                const pabrikanData = await getFunction(ENDPOINT.factoryDefault, true).then((data: any) => {
                  const dropdown: DropdownItem[] = data.data.map((item: any) => {
                    return {
                      label: item.factory_name,
                      value: item.id,
                    };
                  });

                  return dropdown;
                });

                const editData: FormType = {
                  title: "Edit Obat",
                  inputs: [
                    [
                      {
                        name: "sellingPrice",
                        defaultValue: dataFetch.data[0].selling_price,
                        placeholder: "Harga Jual",
                        placeholderPosition: "out",
                        type: "currency",
                      },
                      {
                        name: "purchasePrice",
                        defaultValue: dataFetch.data[0].purchase_price,
                        placeholder: "Harga Beli Pabrik",
                        placeholderPosition: "out",
                        type: "currency",
                      },
                      {
                        name: "drugFactory",
                        defaultValue: {
                          label: dataFetch.data[0].drugFactory.factory_name,
                          value: dataFetch.data[0].drugFactory.id,
                        },
                        placeholder: "Pabrikan",
                        placeholderPosition: "out",
                        type: "dropdown",
                        items: pabrikanData,
                      },
                      {
                        name: "drugCategory",
                        defaultValue: { label: dataFetch.data[0].drugCategory.category_name, value: dataFetch.data[0].drugCategory.id },
                        placeholder: "Kategori",
                        placeholderPosition: "out",
                        type: "dropdown",
                        items: kategoriObatData,
                      },
                      {
                        name: "dose",
                        defaultValue: dataFetch.data[0].dose,
                        placeholder: "Takaran",
                        placeholderPosition: "out",
                        type: "text",
                      },
                      {
                        name: "genericName",
                        defaultValue: dataFetch.data[0].generic_name,
                        placeholder: "Nama Generik",
                        placeholderPosition: "out",
                        type: "text",
                      },
                      {
                        name: "drugName",
                        defaultValue: dataFetch.data[0].name,
                        placeholder: "Nama Obat",
                        placeholderPosition: "out",
                        type: "text",
                      },
                    ],
                  ],
                  submitButton: {
                    label: "Edit Obat",
                    btnType: "PRIMARY",
                    onPress: (data: any) => {
                      updateFunction(`${ENDPOINT.drugDefault}/${dataFetch.data[0].id}`, data, true)
                        .then(() => {
                          setRecoil(showAddModalState, false);
                          setRecoil(editFromState, null);
                          queryClient.invalidateQueries({ queryKey: ["getClinicDrugs"] });
                        })
                        .catch((error: any) => {
                          setRecoil(modalValidationErrorState, error);
                        });
                    },
                  },
                };

                setRecoil(editFromState, editData);
                setRecoil(showAddModalState, true);
              });
            },
          },
          {
            type: "delete",
            onPress: (id: number) => {
              deleteFunction(`${ENDPOINT.drugDefault}/${id}`, true)
                .then(() => {
                  queryClient.invalidateQueries({ queryKey: ["getClinicDrugs"] });
                })
                .catch((error: any) => {
                  showToast("failed", error.error.message);
                });
            },
          },
        ],
        detailDest: "DetailObat",
      };

      return tableData;
    }
  },
});

const obatAddFormSelector = selector({
  key: "obatAddFormSelector",
  get: async () => {
    const kategoriObatData = await getFunction(ENDPOINT.drugCategoryDefault, true).then((data: any) => {
      const dropdown: DropdownItem[] = data.data.map((item: any) => {
        return {
          label: item.category_name,
          value: item.id,
        };
      });

      return dropdown;
    });

    const pabrikanData = await getFunction(ENDPOINT.factoryDefault, true).then((data: any) => {
      const dropdown: DropdownItem[] = data.data.map((item: any) => {
        return {
          label: item.factory_name,
          value: item.id,
        };
      });

      return dropdown;
    });

    const addObatForm: FormType = {
      title: "Tambah Obat",
      inputs: [
        [
          {
            name: "sellingPrice",
            defaultValue: 0,
            placeholder: "Harga Jual",
            placeholderPosition: "out",
            type: "currency",
          },
          {
            name: "purchasePrice",
            defaultValue: 0,
            placeholder: "Harga Beli Pabrik",
            placeholderPosition: "out",
            type: "currency",
          },
          {
            name: "drugFactory",
            defaultValue: null,
            placeholder: "Pabrikan",
            placeholderPosition: "out",
            type: "dropdown",
            items: pabrikanData,
          },
          {
            name: "drugCategory",
            defaultValue: null,
            placeholder: "Kategori",
            placeholderPosition: "out",
            type: "dropdown",
            items: kategoriObatData,
          },
          {
            name: "dose",
            defaultValue: null,
            placeholder: "Takaran",
            placeholderPosition: "out",
            type: "text",
          },
          {
            name: "genericName",
            defaultValue: null,
            placeholder: "Nama Generik",
            placeholderPosition: "out",
            type: "text",
          },
          {
            name: "drugName",
            defaultValue: null,
            placeholder: "Nama Obat",
            placeholderPosition: "out",
            type: "text",
          },
        ],
      ],
      submitButton: {
        label: "Tambah Obat",
        btnType: "SUCCESS",
        onPress: (data: any) =>
          postFunction(ENDPOINT.drugDefault, data, true)
            .then(() => {
              setRecoil(showAddModalState, false);
              queryClient.invalidateQueries({ queryKey: ["getClinicDrugs"] });
            })
            .catch((error: any) => {
              setRecoil(modalValidationErrorState, error);
            }),
      },
    };

    return addObatForm;
  },
});

const obatDetailSelectorFamily = selectorFamily({
  key: "obatDetailSelectorFamily",
  get: (data?: any) => () => {
    if (!!data) {
      const obatDetail: DetailDataType = {
        pageHeader: {
          title: data.data[0].name,
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
            setRecoil(showDetailModalState, true);
          },
        },
        detailData: [
          {
            headers: ["Tanggal", "No Invoice", "Jumlah", "Harga Beli", "Total"],
            data: [],
          },
          {
            headers: ["Tanggal", "No Invoice", "Nama Pelanggan", "Jumlah", "Harga Beli", "Total"],
            data: [],
          },
        ],
      };

      return obatDetail;
    }
  },
});

const obatModalDetailSelectorFamily = selectorFamily({
  key: "pabrikanModalDetailSelectorFamily",
  get: (data?: any) => () => {
    if (!!data) {
      const modalDetail: MainDetailType = {
        statData: [
          {
            label: "Stock",
            stat: data.data[0].stock || 0,
            color: colors.LightRed,
            textColor: colors.Danger,
          },
          {
            label: "Total Penjualan",
            stat: 0,
            color: colors.WhiteBlue,
            textColor: colors.Secondary,
          },
          {
            label: "Total Pembelian",
            stat: 0,
            color: colors.LightGreen,
            textColor: colors.Primary,
          },
        ],
        detailData: [
          {
            label: "Nama Obat",
            value: data.data[0].name,
            type: "text",
          },
          {
            label: "Nama Generik",
            value: data.data[0].generic_name,
            type: "text",
          },
          {
            label: "Takaran",
            value: data.data[0].dose,
            type: "text",
          },
          {
            label: "Kategori",
            value: data.data[0].drugCategory.category_name,
            type: "text",
          },
          {
            label: "Rak",
            value: data.data[0].shelve || 0,
            type: "text",
          },
          {
            label: "Pabrikan",
            value: data.data[0].drugFactory.factory_name,
            type: "text",
          },
          {
            label: "Harga Beli Pabrikan",
            value: data.data[0].purchase_price,
            type: "currency",
          },
          {
            label: "Harga Jual",
            value: data.data[0].selling_price,
            type: "currency",
          },
        ],
      };

      return modalDetail;
    }
  },
});

export { kategoriObatTableSelectorFamily, obatTableSelectorFamily, obatAddFormSelector, obatDetailSelectorFamily, obatModalDetailSelectorFamily };
