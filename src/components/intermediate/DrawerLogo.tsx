import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";

type Props = {
  onPress?: () => void;
};

const DrawerLogo = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={require("@assets/images/logoSmall.png")} />
      <Text numberOfLines={1} style={[styles.logoTitle, sizeType.H1]}>
        Pharmacin
      </Text>
    </TouchableOpacity>
  );
};

export default DrawerLogo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 19,
    marginBottom: 46,
    marginHorizontal: 15,
  },

  logoTitle: {
    color: colors.Primary,
  },
});
