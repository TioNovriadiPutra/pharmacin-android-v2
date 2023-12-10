import { useRecoilState, useSetRecoilState } from "recoil";
import { drawerBackdropStatusState, drawerPressIndexState, drawerStatusState } from "@store/atom/drawerState";
import { SharedValue, withTiming } from "react-native-reanimated";
import { useCallback } from "react";

const useDrawer = (drawerAnim: SharedValue<number>, backdropAnim: SharedValue<number>) => {
  const [drawerStatus, setDrawerStatus] = useRecoilState(drawerStatusState);
  const setDrawerBackdropStatus = useSetRecoilState(drawerBackdropStatusState);
  const [drawerPressIndex, setDrawerPressIndex] = useRecoilState(drawerPressIndexState);

  const onOpenDrawer = useCallback(() => {
    drawerAnim.value = withTiming(1, { duration: 500 });
    onOpenBackdrop();
    setDrawerStatus(true);
  }, [drawerStatus]);

  const onOpenBackdrop = () => {
    setDrawerBackdropStatus(true);
    backdropAnim.value = withTiming(1, { duration: 500 });
  };

  const onCloseDrawer = useCallback(() => {
    drawerAnim.value = withTiming(0, { duration: 500 });
    onCloseBackDrop();
    setDrawerStatus(false);
    setDrawerPressIndex("");
  }, [drawerStatus, drawerPressIndex]);

  const onCloseBackDrop = () => {
    backdropAnim.value = withTiming(0, { duration: 500 });
    setTimeout(() => {
      setDrawerBackdropStatus(false);
    }, 500);
  };

  const onDrawer = () => {
    if (drawerStatus) {
      onCloseDrawer();
    } else {
      onOpenDrawer();
    }
  };

  return {
    onDrawer,
    onOpenDrawer,
    onCloseDrawer,
  };
};

export default useDrawer;
