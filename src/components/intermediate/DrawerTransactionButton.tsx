import { Image, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";
import { useRecoilValue } from "recoil";
import { drawerStatusState } from "@store/atom/drawerState";
import { AnimatedTouchableOpacity } from "@utils/constant/animation";
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type Props = {
  navigation: any;
};

const DrawerTransactionButton = ({ navigation }: Props) => {
  const drawerStatus = useRecoilValue(drawerStatusState);

  const buttonAnim = useSharedValue(0);

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const marginHorizontal = interpolate(buttonAnim.value, [0, 1], [-5, 0]);
    const paddingLeft = interpolate(buttonAnim.value, [0, 1], [11, 45]);

    return {
      marginHorizontal,
      paddingLeft,
    };
  });

  const onPress = () => {
    navigation.navigate("Penjualan", {
      screen: "TambahPenjualan",
    });
  };

  useEffect(() => {
    if (drawerStatus) {
      buttonAnim.value = withTiming(1, { duration: 500 });
    } else {
      buttonAnim.value = withTiming(0, { duration: 500 });
    }
  }, [drawerStatus]);

  return (
    <AnimatedTouchableOpacity style={[styles.container, buttonAnimatedStyle]} onPress={onPress}>
      <Image source={require("@assets/images/plus.png")} />

      <Text numberOfLines={1} style={[styles.label, sizeType.H2]}>
        Transaksi Baru
      </Text>
    </AnimatedTouchableOpacity>
  );
};

export default DrawerTransactionButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.Secondary,
    paddingVertical: 12,
    borderRadius: 10,
    gap: 11,
  },
  label: {
    color: colors.White,
  },
});
