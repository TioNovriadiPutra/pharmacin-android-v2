import { Dimensions, StyleSheet } from "react-native";
import { colors } from "./colors";

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;

export const RPW = (dimension: number): number => {
  return (dimension / 100) * WIDTH;
};

export const RPH = (dimension: number): number => {
  return (dimension / 100) * HEIGHT;
};

export const customStyles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: colors.Modal,
  },
  modalContainer: {
    backgroundColor: colors.White,
    height: "100%",
    position: "absolute",
    paddingHorizontal: 46,
    paddingTop: 36,
    overflow: "hidden",
    gap: 34,
  },
  title: {
    color: colors.Black,
    textAlign: "center",
  },
  transactionBox: {
    backgroundColor: colors.White,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 20,
    flex: 1,
  },
  transactionContent: {
    flex: 1,
    gap: 12,
  },
  errorMessage: {
    color: colors.Danger,
    paddingLeft: 20,
    position: "absolute",
    top: "90%",
  },
  imageResponsive: {
    aspectRatio: 1194 / 834,
    resizeMode: "contain",
  },
});
