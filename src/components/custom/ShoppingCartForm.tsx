import { StyleSheet, View } from "react-native";
import React from "react";
import { customStyles } from "@themes/styles";
import { Control, FieldValues } from "react-hook-form";
import { ShoppingCartType } from "@utils/types/FormType";
import ShoppingCartHeader from "@components/intermediate/ShoppingCartHeader";
import ShoppingInput from "@components/intermediate/ShoppingInput";

type Props = {
  control: Control<FieldValues, any>;
  shoppingCartData: ShoppingCartType;
};

const ShoppingCartForm = ({ control, shoppingCartData }: Props) => {
  return (
    <View style={customStyles.transactionBox}>
      <ShoppingCartHeader headerData={shoppingCartData.headers} />
      <ShoppingInput control={control} />
    </View>
  );
};

export default ShoppingCartForm;

const styles = StyleSheet.create({});
