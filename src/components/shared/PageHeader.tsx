import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomHeader } from "@utils/types/HeaderType";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";
import SubmitButton from "./SubmitButton";

type Props = {
  headerData: CustomHeader;
};

const PageHeader = ({ headerData }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, sizeType.H1]}>{headerData.title}</Text>
      <View style={styles.functionContainer}>
        {headerData.function.map((item, index) => {
          if (item.type === "button") {
            return <SubmitButton key={index.toString()} label={item.functionItem.label} buttonType={item.functionItem.btnType} style={styles.button} labelSize="H2" />;
          }
        })}
      </View>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: colors.Black,
  },
  button: {
    paddingHorizontal: 63,
  },
  functionContainer: {
    flexDirection: "row",
  },
});
