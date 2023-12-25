import { atom } from "recoil";

const pabrikanDetailActiveScreenState = atom<number>({
  key: "pabrikanDetailActiveScreenState",
  default: 0,
});

export { pabrikanDetailActiveScreenState };
