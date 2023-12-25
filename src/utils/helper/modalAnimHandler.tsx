import { editFromState, modalValidationErrorState, showAddModalState, showDetailModalState } from "@store/atom/globalState";
import { SharedValue, withTiming } from "react-native-reanimated";
import { setRecoil } from "recoil-nexus";

export const onCloseModal = (animValue: SharedValue<number>, type: "form" | "detail") => {
  animValue.value = withTiming(0, { duration: 500 });
  setTimeout(() => {
    setRecoil(type === "form" ? showAddModalState : showDetailModalState, false);
    setRecoil(modalValidationErrorState, null);
    setRecoil(editFromState, null);
  }, 450);
};

export const onOpenModal = (animValue: SharedValue<number>) => {
  animValue.value = withTiming(542, { duration: 500 });
};
