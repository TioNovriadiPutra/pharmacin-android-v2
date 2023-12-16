import { FormType } from "@utils/types/FormType";

const addPabrikForm: FormType = {
  title: "Tambah Pabrik",
  inputs: [
    [
      {
        name: "drugFactoryName",
        defaultValue: null,
        placeholder: "Pabrik",
        type: "text",
      },
      {
        name: "drugFactoryEmail",
        defaultValue: null,
        placeholder: "Email",
        type: "text",
      },
      {
        name: "drugFactoryPhone",
        defaultValue: null,
        placeholder: "Telepon",
        type: "phone",
      },
    ],
  ],
  submitButton: {
    label: "Tambah Pabrik",
    btnType: "SUCCESS",
  },
};

export { addPabrikForm };
