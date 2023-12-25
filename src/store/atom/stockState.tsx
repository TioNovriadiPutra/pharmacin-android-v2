import { atom } from "recoil";

const stockActiveScreenState = atom<number>({
  key: "stockActiveScreenState",
  default: 0,
});

export { stockActiveScreenState };
