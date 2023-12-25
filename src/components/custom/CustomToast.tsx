import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";
import { useRecoilState, useRecoilValue } from "recoil";
import { toastMessageState, toastShowState, toastTypeState } from "@store/atom/globalState";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from "react-native-reanimated";

const CustomToast = () => {
  const toastAnim = useSharedValue(-100);

  const [showToast, setShowToast] = useRecoilState(toastShowState);
  const toastType = useRecoilValue(toastTypeState);
  const toastMessage = useRecoilValue(toastMessageState);

  const toastAnimatedStyle = useAnimatedStyle(() => {
    return {
      bottom: toastAnim.value,
    };
  });

  const show = () => {
    toastAnim.value = withSequence(
      withTiming(54),
      withDelay(
        2000,
        withTiming(-100, { duration: 500 }, (finished?: boolean) => {
          if (finished) {
            runOnJS(setShowToast)(false);
          }
        })
      )
    );
  };

  useEffect(() => {
    if (showToast) {
      show();
    }
  }, [showToast]);

  return (
    <>
      {showToast && (
        <Animated.View style={[styles.container, toastType === "success" ? styles.containerSuccess : styles.containerFailed, toastAnimatedStyle]}>
          <View style={[styles.circle, { backgroundColor: toastType === "success" ? colors.Primary : colors.Danger }]}>
            <Image source={toastType === "success" ? require("@assets/images/success.png") : require("@assets/images/failed.png")} />
          </View>
          <Text style={[styles.label, sizeType.H4]}>{toastMessage}</Text>
        </Animated.View>
      )}
    </>
  );
};

export default CustomToast;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 14,
    width: 322,
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    position: "absolute",
    zIndex: 999999999,
    alignSelf: "center",
  },
  containerSuccess: {
    backgroundColor: colors.LightGreen,
    borderColor: colors.Primary,
  },
  containerFailed: {
    backgroundColor: colors.LightRed,
    borderColor: colors.Danger,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 14,
  },
  label: {
    textAlign: "center",
    color: colors.Black,
    flex: 1,
  },
});
