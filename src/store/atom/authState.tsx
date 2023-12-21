import { ValidationErrorType } from "@utils/types/FormType";
import { atom } from "recoil";

const authTokenState = atom<string | null>({
  key: "authTokenState",
  default: null,
});

const userIdState = atom<number | null>({
  key: "userIdState",
  default: null,
});

const clinicIdState = atom<number | null>({
  key: "clinicIdState",
  default: null,
});

const loginErrorState = atom<ValidationErrorType | null>({
  key: "loginErrorState",
  default: null,
});

const regisErrorState = atom<ValidationErrorType | null>({
  key: "regisErrorState",
  default: null,
});

export { authTokenState, userIdState, clinicIdState, loginErrorState, regisErrorState };
