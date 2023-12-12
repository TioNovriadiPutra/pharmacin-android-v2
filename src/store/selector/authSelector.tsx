import { authTokenState } from "@store/atom/authState";
import { selector } from "recoil";

const isAuthenticatesSelector = selector({
  key: "isAuthenticatedSelector",
  get: ({ get }) => {
    const authToken = get(authTokenState);
    return !!authToken;
  },
});

export { isAuthenticatesSelector };
