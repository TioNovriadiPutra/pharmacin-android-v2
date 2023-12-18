import { StyleSheet, View } from "react-native";
import React from "react";
import { Control, FieldValues } from "react-hook-form";
import LeftTransactionForm from "@components/custom/LeftTransactionForm";
import RightTransactionForm from "@components/custom/RightTransactionForm";
import ShoppingCartForm from "@components/custom/ShoppingCartForm";
import { customStyles } from "@themes/styles";
import { TransactionFormType } from "@utils/types/FormType";

type Props = {
  control: Control<FieldValues, any>;
  inputData: TransactionFormType;
};

const TransactionContent = ({ control, inputData }: Props) => {
  return (
    <View style={customStyles.transactionContent}>
      <View style={[customStyles.transactionContent, styles.first]}>
        <LeftTransactionForm control={control} inputs={inputData.formData[0].inputs} />
        <RightTransactionForm control={control} inputs={inputData.formData[1].inputs} />
      </View>
      <ShoppingCartForm control={control} shoppingCartData={inputData.shoppingCart} />
    </View>
  );
};

export default TransactionContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
  first: {
    flexDirection: "row",
  },
});
