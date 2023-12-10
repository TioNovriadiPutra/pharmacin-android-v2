import { StyleSheet, TouchableWithoutFeedback, Dimensions, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import DrawerLogo from "@components/intermediate/DrawerLogo";
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import DrawerNotifItem from "@components/intermediate/DrawerNotifItem";
import Bar from "@components/shared/Bar";
import DrawerItemList from "@components/intermediate/DrawerItemList";
import useDrawer from "@hooks/useDrawer";
import { useRecoilValue } from "recoil";
import { drawerBackdropStatusState, drawerPressIndexState } from "@store/atom/drawerState";
import DrawerTransactionButton from "@components/intermediate/DrawerTransactionButton";

const WIDTH = Dimensions.get("window").width;

type Props = {
  navigation: any;
};

const CustomDrawer = ({ navigation }: Props) => {
  const drawerBackdropStatus = useRecoilValue(drawerBackdropStatusState);
  const drawerPressIndex = useRecoilValue(drawerPressIndexState);

  const drawerAnim = useSharedValue(0);
  const backdropAnim = useSharedValue(0);

  const { onDrawer, onCloseDrawer, onOpenDrawer } = useDrawer(drawerAnim, backdropAnim);

  const drawerAnimatedStyle = useAnimatedStyle(() => {
    const width = interpolate(drawerAnim.value, [0, 1], [68, 274]);
    const borderTopRightRadius = interpolate(drawerAnim.value, [0, 1], [0, 10]);
    const borderBottomRightRadius = interpolate(drawerAnim.value, [0, 1], [0, 10]);

    return {
      width,
      borderTopRightRadius,
      borderBottomRightRadius,
    };
  });

  const backdropAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: backdropAnim.value,
    };
  });

  return (
    <View style={{ width: 68, height: "100%" }}>
      {drawerBackdropStatus && (
        <TouchableWithoutFeedback onPress={onCloseDrawer}>
          <Animated.View style={[styles.backdrop, backdropAnimatedStyle]} />
        </TouchableWithoutFeedback>
      )}
      <Animated.View style={[styles.container, drawerAnimatedStyle, { overflow: drawerPressIndex === "" ? "hidden" : "visible" }]}>
        <DrawerLogo onPress={onDrawer} />
        <DrawerNotifItem navigation={navigation} />
        <Bar />
        <DrawerItemList navigation={navigation} onCloseDrawer={onCloseDrawer} onOpenDrawer={onOpenDrawer} />
        <DrawerTransactionButton />
        <Bar />
      </Animated.View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.White,
    width: 68,
    paddingVertical: 24,
    paddingHorizontal: 18,
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 2,
  },
  backdrop: {
    backgroundColor: colors.Modal,
    height: "100%",
    width: WIDTH,
    position: "absolute",
    zIndex: 1,
  },
});
