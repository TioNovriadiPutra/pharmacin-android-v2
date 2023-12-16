import AsyncStorage from "@react-native-async-storage/async-storage";
import { cashierStatusState } from "@store/atom/dashboardState";
import { pabrikanShowAddModalState } from "@store/atom/pabrikanState";
import { CustomHeader } from "@utils/types/HeaderType";
import { setRecoil } from "recoil-nexus";

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
          setRecoil(pabrikanShowAddModalState, true);
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

export { dashboardHeaderOpen, dashboardHeaderClose, penjualanHeader, kelolaPenjualanHeader, pabrikanHeader };
