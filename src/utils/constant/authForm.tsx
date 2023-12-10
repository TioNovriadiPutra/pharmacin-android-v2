import { AuthFormType } from "@utils/types/FormType";

const loginForm: AuthFormType = {
  title: "Masuk",
  subTitle: "Selamat datang, silahkan masuk dengan akun yang telah terdaftar",
  inputs: [
    [
      {
        name: "email",
        defaultValue: null,
        type: "text",
        placeholder: "Email",
      },
      {
        name: "password",
        defaultValue: null,
        type: "password",
        placeholder: "Password",
      },
    ],
  ],
  submitButton: {
    label: "Masuk",
    btnType: "SUCCESS",
  },
};

const regisForm: AuthFormType = {
  title: "Daftar",
  subTitle: "Masukan alamat email dan kata sandi untuk membuat akun",
  inputs: [
    [
      {
        name: "fullName",
        defaultValue: null,
        type: "text",
        placeholder: "Nama Lengkap",
      },
      {
        name: "gender",
        defaultValue: null,
        type: "dropdown",
        placeholder: "Jenis Kelamin",
        items: [
          {
            label: "Laki - laki",
            value: "male",
          },
          {
            label: "Perempuan",
            value: "female",
          },
        ],
      },
      {
        name: "phone",
        defaultValue: null,
        type: "phone",
        placeholder: "Nomor Handphone",
      },
      {
        name: "clinicName",
        defaultValue: null,
        type: "text",
        placeholder: "Nama Klinik",
      },
      {
        name: "clinicPhone",
        defaultValue: null,
        type: "phone",
        placeholder: "Nomor Telepon",
      },
    ],
    [
      {
        name: "email",
        defaultValue: null,
        type: "text",
        placeholder: "Email",
      },
      {
        name: "password",
        defaultValue: null,
        type: "password",
        placeholder: "Password",
      },
      {
        name: "password_confirmation",
        defaultValue: null,
        type: "password",
        placeholder: "Konfirmasi Password",
      },
    ],
  ],
  submitButton: {
    label: "Daftar",
    btnType: "PRIMARY",
  },
};

export { loginForm, regisForm };
