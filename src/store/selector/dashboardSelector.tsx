import AsyncStorage from "@react-native-async-storage/async-storage";
import { dashboardHeaderState } from "@store/atom/dashboardState";
import { CustomHeader } from "@utils/types/HeaderType";
import { selector } from "recoil";

const dashboardHeaderSelector = selector<CustomHeader>({
  key: "dashboardHeaderSelector",
  get: async ({ get }) => {
    const cashierStatus = await AsyncStorage.getItem("@cashierStatus");

    let dashboardData = Object.assign({}, get(dashboardHeaderState));

    const newFunction = dashboardData.function.map((item) => {
      let newFunctionItem = Object.assign({}, item.functionItem);

      if (!!cashierStatus) {
        if (JSON.parse(cashierStatus)) {
          Object.assign(newFunctionItem, {
            label: "Tutup Kasir",
            btnType: "DANGER",
          });
        } else {
          Object.assign(newFunctionItem, {
            label: "Buka Kasir",
            btnType: "SUCCESS",
          });
        }
      } else {
        Object.assign(newFunctionItem, {
          label: "Buka Kasir",
          btnType: "SUCCESS",
        });
      }

      let newItem = Object.assign({}, item, { functionItem: newFunctionItem });

      return newItem;
    });

    let newData = Object.assign({}, dashboardData, { function: newFunction });

    return newData;
  },
});

export { dashboardHeaderSelector };
