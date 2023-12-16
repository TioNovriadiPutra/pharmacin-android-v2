import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomHeader } from "@utils/types/HeaderType";
import { colors } from "@themes/colors";
import { sizeType } from "@themes/fonts";
import SubmitButton from "./SubmitButton";
import { CustomButtonType } from "@utils/types/ButtonType";
import { CustomTextInput } from "@utils/types/InputType";
import HeaderSearchInput from "@components/intermediate/HeaderSearchInput";

type Props = {
  headerData: CustomHeader;
};

const PageHeader = ({ headerData }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, sizeType.H1]}>{headerData.title}</Text>
        {headerData.subTitle && <Text style={[styles.subTitle, sizeType.H2]}>{headerData.subTitle}</Text>}
      </View>
      <View style={styles.functionContainer}>
        {headerData.function.map((item, index) => {
          if (item.type === "button") {
            const typeItem: CustomButtonType = item.functionItem as CustomButtonType;

            return <SubmitButton key={index.toString()} label={typeItem.label} buttonType={typeItem.btnType} style={styles.button} labelSize="H2" onPress={typeItem.onPress} />;
          } else if (item.type === "search") {
            const typeItem: CustomTextInput = item.functionItem as CustomTextInput;

            return <HeaderSearchInput key={index.toString()} inputData={typeItem} />;
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
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  title: {
    color: colors.Black,
    includeFontPadding: false,
  },
  subTitle: {
    color: colors.TableHead,
    includeFontPadding: false,
  },
  button: {
    paddingHorizontal: 63,
  },
  functionContainer: {
    flexDirection: "row",
    gap: 14,
  },
});
