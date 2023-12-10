import { StyleSheet, View, Image } from "react-native";
import React from "react";

type Props = {
  type?: "login" | "register";
};

const VectorContainer = ({ type = "login" }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={type === "login" ? require("@assets/images/loginVectorTop.png") : require("@assets/images/regisVectorTop.png")} />
      <Image source={type === "login" ? require("@assets/images/loginVectorBottom.png") : require("@assets/images/regisVectorBottom.png")} style={styles.bottom} />
    </View>
  );
};

export default VectorContainer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "space-between",
  },
  bottom: {
    alignSelf: "flex-end",
  },
});
