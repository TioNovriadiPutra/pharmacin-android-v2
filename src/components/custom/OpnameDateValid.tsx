import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { sizeType } from "@themes/fonts";
import { colors } from "@themes/colors";

type Props = {
  status?: boolean;
  label: string;
};

const OpnameDateValid = ({ status, label }: Props) => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: status ? colors.LightGreen : colors.LightRed, padding: 8, borderRadius: 6 }}>
        <Text style={[sizeType.BodyText, { color: status ? colors.Primary : colors.Danger }]}>{label}</Text>
      </View>
    </View>
  );
};

export default OpnameDateValid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
