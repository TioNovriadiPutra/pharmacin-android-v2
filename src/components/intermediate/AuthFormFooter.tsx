import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@themes/colors";
import { fonts, sizeType } from "@themes/fonts";
import { useNavigation } from "@react-navigation/native";

const AuthFormFooter = () => {
  const nav = useNavigation();

  const onPress = () => {
    nav.navigate("Register" as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Tidak punya akun?</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.label, sizeType.H2]}>Daftar disini</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthFormFooter;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: colors.Border,
    alignItems: "center",
    paddingTop: 18,
    gap: 4,
  },
  question: {
    color: colors.LightGray,
    fontFamily: fonts.Regular,
    fontSize: 16,
  },
  label: {
    color: colors.Primary,
  },
});
