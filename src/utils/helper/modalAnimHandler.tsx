import { SharedValue, withTiming } from "react-native-reanimated";
import { SetterOrUpdater } from "recoil";

export const onCloseModal = (animValue: SharedValue<number>, setShowModal: SetterOrUpdater<boolean>) => {
  animValue.value = withTiming(0, { duration: 500 });
  setTimeout(() => {
    setShowModal(false);
  }, 450);
};

export const onOpenModal = (animValue: SharedValue<number>) => {
  animValue.value = withTiming(542, { duration: 500 });
};
