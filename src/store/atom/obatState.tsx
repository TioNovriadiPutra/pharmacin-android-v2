import { atom } from "recoil";

const obatDetailActiveScreenState = atom<number>({
  key: "obatDetailActiveScreenState",
  default: 0,
});

export { obatDetailActiveScreenState };
