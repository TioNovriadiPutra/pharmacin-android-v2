import { StyleSheet } from "react-native";

const fonts = {
  Bold: "PJSBold",
  SemiBold: "PJSSemiBold",
  Medium: "PJSMedium",
  Regular: "PJSRegular",
};

const sizeType = StyleSheet.create({
  H1: {
    fontFamily: fonts.Bold,
    fontSize: 24,
  },
  H2: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
  },
  H3: {
    fontFamily: fonts.Medium,
    fontSize: 16,
  },
  H4: {
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
  BodyText: {
    fontFamily: fonts.Regular,
    fontSize: 14,
  },
  Button: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
  },
});

export { fonts, sizeType };
