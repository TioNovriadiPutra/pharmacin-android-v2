import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { DrawerItem } from "@utils/types/DrawerType";
import { sizeType } from "@themes/fonts";
import { colors } from "@themes/colors";
import { useRecoilState } from "recoil";
import { drawerPressIndexState } from "@store/atom/drawerState";
import DrawerSubMenu from "./DrawerSubMenu";

type Props = {
  navigation: any;
  item: DrawerItem;
  status: "active" | "inactive";
  onCloseDrawer: () => void;
  onOpenDrawer: () => void;
};

const DrawerItemContent = ({ navigation, item, status, onCloseDrawer, onOpenDrawer }: Props) => {
  const [drawerIndex, setDrawerIndex] = useRecoilState(drawerPressIndexState);

  const onPress = () => {
    if (item.subMenu) {
      onOpenDrawer();

      setDrawerIndex(item.label);
    } else {
      navigation.navigate(item.destination);
      onCloseDrawer();
    }
  };

  const onPressSubMenu = (destination: string) => {
    navigation.navigate(item.destination, {
      screen: destination,
    });
    onCloseDrawer();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={status === "active" ? item.activeIcon : item.inactiveIcon} />
      <Text numberOfLines={1} style={[styles.label, sizeType.H3, { color: status === "active" ? colors.Primary : colors.Placeholder }]}>
        {item.label}
      </Text>
      {item.subMenu && <Image source={require("@assets/images/arrowRight.png")} />}
      {item.subMenu ? drawerIndex === item.label ? <DrawerSubMenu subMenuItems={item.subMenu} onPressSubMenu={onPressSubMenu} /> : null : null}
    </TouchableOpacity>
  );
};

export default DrawerItemContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  label: {
    flex: 1,
  },
});
