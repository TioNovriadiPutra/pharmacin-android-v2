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

export { authTokenState, userIdState, clinicIdState };
