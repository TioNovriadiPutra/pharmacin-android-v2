import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainerRef } from "@react-navigation/native";
import { cashierStatusState } from "@store/atom/dashboardState";
import { showAddModalState } from "@store/atom/globalState";
import { CustomHeader } from "@utils/types/HeaderType";
import { AppPembelianStackParamType, AppPenjualanStackParamType } from "@utils/types/RootStackParamType";
import React from "react";
import { setRecoil } from "recoil-nexus";

type AppStackParamType = AppPenjualanStackParamType | AppPembelianStackParamType;

const navigationRef = React.createRef<NavigationContainerRef<AppStackParamType>>();

const dashboardHeaderOpen: CustomHeader = {
  title: "Dashboard",
  function: [
    {
      type: "button",
      functionItem: {
        label: "Tutup Kasir",
        btnType: "DANGER",
        onPress: async () => {
          setRecoil(cashierStatusState, false);
          await AsyncStorage.setItem("@cashierStatus", JSON.stringify(false));
        },
      },
    },
  ],
};

const dashboardHeaderClose: CustomHeader = {
  title: "Dashboard",
  function: [
    {
      type: "button",
      functionItem: {
        label: "Buka Kasir",
        btnType: "SUCCESS",
        onPress: async () => {
          setRecoil(cashierStatusState, true);
          await AsyncStorage.setItem("@cashierStatus", JSON.stringify(true));
        },
      },
    },
  ],
};

const penjualanHeader: CustomHeader = {
  title: "Penjualan",
  function: [
    {
      type: "button",
      functionItem: {
        label: "Tambah",
        btnType: "SUCCESS",
      },
    },
  ],
};

const kelolaPenjualanHeader: CustomHeader = {
  title: "Penjualan",
  subTitle: "/ Kelola Penjualan",
  function: [
    {
      type: "button",
      functionItem: {
        label: "Tambah Penjualan",
        btnType: "SUCCESS",
        onPress: () => {
          navigationRef.current?.navigate("TambahPenjualan" as never);
        },
      },
    },
    {
      type: "search",
      functionItem: {
        name: "pabrikanSearch",
        defaultValue: undefined,
        type: "text",
        placeholder: "Cari disini...",
      },
    },
  ],
};

const stockHeader: CustomHeader = {
  title: "Stock",
  subTitle: "/ Stock",
  function: [
    {
      type: "switch",
      functionItem: {
        items: [
          {
            label: "Per Item",
          },
          {
            label: "Per Batch",
          },
        ],
      },
    },
    {
      type: "search",
      functionItem: {
        name: "stockSearch",
        defaultValue: null,
        type: "text",
        placeholder: "Cari disini...",
      },
    },
  ],
};

const stockOpnameHeader: CustomHeader = {
  title: "Stock",
  subTitle: "/ Opname",
  function: [
    {
      type: "search",
      functionItem: {
        name: "opnameSearch",
        defaultValue: null,
        type: "text",
        placeholder: "Cari disini...",
      },
    },
  ],
};

const kategoriObatHeader: CustomHeader = {
  title: "Obat",
  subTitle: "/ Kategori",
  function: [
    {
      type: "button",
      functionItem: {
        label: "Tambah Kategori",
        btnType: "SUCCESS",
        onPress: () => setRecoil(showAddModalState, true),
      },
    },
    {
      type: "search",
      functionItem: {
        name: "drugCategorySearch",
        defaultValue: null,
        type: "text",
        placeholder: "Cari disini...",
      },
    },
  ],
};

const obatHeader: CustomHeader = {
  title: "Obat",
  subTitle: "/ Kelola Obat",
  function: [
    {
      type: "button",
      functionItem: {
        label: "Tambah Obat",
        btnType: "SUCCESS",
        onPress: () => {
          setRecoil(showAddModalState, true);
        },
      },
    },
    {
      type: "search",
      functionItem: {
        name: "drugSearch",
        defaultValue: null,
        type: "text",
        placeholder: "Cari disini...",
      },
    },
  ],
};

const pabrikanHeader: CustomHeader = {
  title: "Pabrikan",
  subTitle: "/ Kelola Pabrik",
  function: [
    {
      type: "button",
      functionItem: {
        label: "Tambah Pabrik",
        btnType: "SUCCESS",
        onPress: () => {
          setRecoil(showAddModalState, true);
        },
      },
    },
    {
      type: "search",
      functionItem: {
        name: "pabrikanSearch",
        defaultValue: undefined,
        type: "text",
        placeholder: "Cari disini...",
      },
    },
  ],
};

const pembelianHeader: CustomHeader = {
  title: "Pembelian",
  subTitle: "/ Kelola Pembelian",
  function: [
    {
      type: "button",
      functionItem: {
        label: "Tambah Pembelian",
        btnType: "SUCCESS",
        onPress: () => {
          navigationRef.current?.navigate("TambahPembelian" as never);
        },
      },
    },
  ],
};

export {
  navigationRef,
  dashboardHeaderOpen,
  dashboardHeaderClose,
  penjualanHeader,
  kelolaPenjualanHeader,
  stockHeader,
  stockOpnameHeader,
  kategoriObatHeader,
  obatHeader,
  pabrikanHeader,
  pembelianHeader,
};
