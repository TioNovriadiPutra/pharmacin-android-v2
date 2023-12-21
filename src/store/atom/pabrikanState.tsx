import { ValidationErrorType } from "@utils/types/FormType";
import { atom } from "recoil";

const pabrikanShowAddModalState = atom<boolean>({
  key: "pabrikanShowAddModalState",
  default: false,
});

const pabrikanShowDetailModalState = atom<boolean>({
  key: "pabrikanShowDetailModalState",
  default: false,
});

const pabrikanAddErrorState = atom<ValidationErrorType | null>({
  key: "pabrikanAddErrorState",
  default: null,
});

const pabrikanDetailActiveScreenState = atom<number>({
  key: "pabrikanDetailActiveScreenState",
  default: 0,
});

export { pabrikanShowAddModalState, pabrikanAddErrorState, pabrikanDetailActiveScreenState, pabrikanShowDetailModalState };
