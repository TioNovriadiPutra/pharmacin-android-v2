import { FormType, ValidationErrorType } from "@utils/types/FormType";
import { atom } from "recoil";

const showAddModalState = atom<boolean>({
  key: "showAddModalState",
  default: false,
});

const showDetailModalState = atom<boolean>({
  key: "showDetailModalState",
  default: false,
});

const modalValidationErrorState = atom<ValidationErrorType | null>({
  key: "modalValidationErrorState",
  default: null,
});

const toastShowState = atom<boolean>({
  key: "toastShowState",
  default: false,
});

const toastTypeState = atom<"success" | "failed">({
  key: "toastTypeState",
  default: "success",
});

const toastMessageState = atom<string | null>({
  key: "toastMessageState",
  default: null,
});

const editFromState = atom<FormType | null>({
  key: "editIdState",
  default: null,
});

export { showAddModalState, showDetailModalState, modalValidationErrorState, toastShowState, toastTypeState, toastMessageState, editFromState };
