import { atom } from "recoil";

const drawerStatusState = atom({
  key: "drawerStatusState",
  default: false,
});

const drawerBackdropStatusState = atom({
  key: "drawerBackdropStatusState",
  default: false,
});

const drawerPressIndexState = atom({
  key: "drawerPressIndexState",
  default: "",
});

export { drawerStatusState, drawerBackdropStatusState, drawerPressIndexState };
