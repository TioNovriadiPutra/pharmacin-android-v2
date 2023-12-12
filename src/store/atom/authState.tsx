import { atom } from "recoil";

const authTokenState = atom({
  key: "authTokenState",
  default: null,
});

const userIdState = atom({
  key: "userIdState",
  default: null,
});

const clinicIdState = atom({
  key: "clinicIdState",
  default: null,
});

export { authTokenState, userIdState, clinicIdState };
