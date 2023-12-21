import { FormType, TransactionFormType } from "@utils/types/FormType";

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
  },
};

const addObatForm: FormType = {
  title: "Tambah Obat",
  inputs: [
    [
      {
        name: "drugName",
        defaultValue: null,
        placeholder: "Nama Obat",
        placeholderPosition: "out",
        type: "text",
      },
      {
        name: "drugGeneric",
        defaultValue: null,
        placeholder: "Nama Generik",
        placeholderPosition: "out",
        type: "text",
      },
      {
        name: "dose",
        defaultValue: null,
        placeholder: "Takaran",
        placeholderPosition: "out",
        type: "text",
      },
      {
        name: "drugCategoryId",
        defaultValue: null,
        placeholder: "Kategori",
        placeholderPosition: "out",
        type: "dropdown",
        items: [
          {
            label: "Obat Keras",
            value: 1,
          },
          {
            label: "Obat Umut",
            value: 2,
          },
        ],
      },
      {
        name: "factoryId",
        defaultValue: null,
        placeholder: "Pabrikan",
        placeholderPosition: "out",
        type: "dropdown",
        items: [
          {
            label: "Pharmacin",
            value: 1,
          },
          {
            label: "PT Cob Cob",
            value: 2,
          },
        ],
      },
      {
        name: "purchasePrice",
        defaultValue: 0,
        placeholder: "Harga Beli Pabrik",
        placeholderPosition: "out",
        type: "currency",
      },
      {
        name: "sellingPrice",
        defaultValue: 0,
        placeholder: "Harga Jual",
        placeholderPosition: "out",
        type: "currency",
      },
    ],
  ],
  submitButton: {
    label: "Tambah Obat",
    btnType: "SUCCESS",
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

export { addPabrikForm, sellingForm, addObatForm };
