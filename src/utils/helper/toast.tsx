import { toastMessageState, toastShowState, toastTypeState } from "@store/atom/globalState";
import { setRecoil } from "recoil-nexus";

export const showToast = (type: "success" | "failed", message: string) => {
  setRecoil(toastTypeState, type);
  setRecoil(toastMessageState, message);
  setRecoil(toastShowState, true);
};
