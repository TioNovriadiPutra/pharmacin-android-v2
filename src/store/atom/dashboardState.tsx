import { atom } from "recoil";

const cashierStatusState = atom<boolean>({
  key: "cashierStatusState",
  default: false,
});

export { cashierStatusState };
