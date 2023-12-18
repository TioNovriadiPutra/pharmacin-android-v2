import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Control, FieldValues } from "react-hook-form";

type Props = {
  control: Control<FieldValues, any>;
};

const ShoppingInput = ({ control }: Props) => {
  return (
    <View style={styles.container}>
      <Text>ShoppingInput</Text>
    </View>
  );
};

export default ShoppingInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
