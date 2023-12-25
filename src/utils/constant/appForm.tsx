import { modalValidationErrorState, showAddModalState } from "@store/atom/globalState";
import { ENDPOINT, queryClient } from "@utils/config/Endpoint";
import { postFunction } from "@utils/helper/fetch";
import { FormType, TransactionFormType } from "@utils/types/FormType";
import { setRecoil } from "recoil-nexus";

const addPabrikForm: FormType = {
  title: "Tambah Pabrik",
  inputs: [
    [
      {
        name: "factoryName",
        defaultValue: null,
        placeholder: "Pabrik",
        placeholderPosition: "out",
        type: "text",
      },
      {
        name: "factoryEmail",
        defaultValue: null,
        placeholder: "Email",
        placeholderPosition: "out",
        type: "text",
      },
      {
        name: "factoryPhone",
        defaultValue: null,
        placeholder: "Telepon",
        placeholderPosition: "out",
        type: "phone",
      },
    ],
  ],
  submitButton: {
    label: "Tambah Pabrik",
    btnType: "SUCCESS",
    onPress: (data: any) =>
      postFunction(ENDPOINT.factoryDefault, data, true)
        .then(() => {
          setRecoil(showAddModalState, false);
          queryClient.invalidateQueries({ queryKey: ["getClinicFactories"] });
        })
        .catch((error: any) => {
          setRecoil(modalValidationErrorState, error);
        }),
  },
};

const addKategoriObatForm: FormType = {
  title: "Tambah Kategori",
  inputs: [
    [
      {
        name: "categoryName",
        defaultValue: null,
        placeholder: "Nama Kategori",
        placeholderPosition: "out",
        type: "text",
      },
    ],
  ],
  submitButton: {
    label: "Tambah Kategori",
    btnType: "SUCCESS",
    onPress: (data: any) => {
      postFunction(ENDPOINT.drugCategoryDefault, data, true)
        .then(() => {
          setRecoil(showAddModalState, false);
          queryClient.invalidateQueries({ queryKey: ["getClinicDrugCategories"] });
        })
        .catch((error: any) => {
          setRecoil(modalValidationErrorState, error);
        });
    },
  },
};

const sellingForm: TransactionFormType = {
  formData: [
    {
      title: "selling",
      inputs: [
        [
          {
            name: "customerName",
            defaultValue: null,
            placeholder: "Nama Pelanggan",
            placeholderPosition: "out",
            type: "text",
          },
          {
            name: "paymentMethod",
            defaultValue: null,
            placeholder: "Metode Pembayaran",
            placeholderPosition: "out",
            type: "dropdown",
            items: [
              {
                label: "Cash",
                value: "cash",
              },
              {
                label: "Debit",
                value: "debit",
              },
            ],
          },
          {
            name: "transactionDate",
            defaultValue: new Date().toLocaleDateString(),
            placeholder: "Tanggal Transaksi",
            placeholderPosition: "out",
            type: "static",
          },
        ],
      ],
    },
    {
      title: "selling",
      inputs: [
        [
          {
            name: "totalPrice",
            defaultValue: 0,
            placeholder: "Total",
            placeholderPosition: "out",
            type: "currencyStatic",
          },
          {
            name: "paymentPrice",
            defaultValue: 0,
            placeholder: "Tunai",
            placeholderPosition: "out",
            type: "currency",
          },
          {
            name: "change",
            defaultValue: 0,
            placeholder: "Kembalian",
            placeholderPosition: "out",
            type: "currencyStatic",
          },
        ],
      ],
    },
  ],
  shoppingCart: {
    headers: ["Item", "Stock", "QTY", "Harga", "Diskon", "Total", "Tindakan"],
  },
};

export { addPabrikForm, sellingForm, addKategoriObatForm };
