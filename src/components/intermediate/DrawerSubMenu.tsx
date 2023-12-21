import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { DrawerSubItem } from "@utils/types/DrawerType";
import { sizeType } from "@themes/fonts";

type Props = {
  subMenuItems: DrawerSubItem[];
  onPressSubMenu: (destination: string) => void;
};

const DrawerSubMenu = ({ subMenuItems, onPressSubMenu }: Props) => {
  return (
    <View style={[styles.container, subMenuItems[0].label === "Pengaturan" && styles.containerProfile]}>
      {subMenuItems.map((item, index) => (
        <TouchableOpacity key={index.toString()} style={[styles.subMenuItem, { borderBottomWidth: index < subMenuItems.length - 1 ? 1 : 0 }]} onPress={() => onPressSubMenu(item.destination)}>
          {item.icon && <Image source={item.icon} />}
          <Text style={[styles.label, sizeType.H3]}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default DrawerSubMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
    position: "absolute",
    left: "120%",
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  containerProfile: {
    bottom: 0,
  },
  subMenuItem: {
    paddingVertical: 17,
    paddingHorizontal: 12,
    borderBottomColor: colors.Bar,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  label: {
    color: colors.Placeholder,
  },
});
