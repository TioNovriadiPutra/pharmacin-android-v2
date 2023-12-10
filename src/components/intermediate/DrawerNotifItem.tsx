import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";

type Props = {
  navigation: any;
};

const DrawerNotifItem = ({ navigation }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require("@assets/images/notif.png")} />
      <Text numberOfLines={1} style={[styles.label, sizeType.H3]}>
        Notifikasi
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerNotifItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  label: {
    color: colors.Placeholder,
  },
});
