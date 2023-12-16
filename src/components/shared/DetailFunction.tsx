import { StyleSheet, View } from "react-native";
import React from "react";
import DetailSwitch from "@components/intermediate/DetailSwitch";
import HeaderSearchInput from "@components/intermediate/HeaderSearchInput";
import { CustomTextInput } from "@utils/types/InputType";

type Props = {
  functionData: { label: string }[];
  searchData: CustomTextInput;
  activeScreen: number;
};

const DetailFunction = ({ functionData, searchData, activeScreen }: Props) => {
  return (
    <View style={styles.container}>
      <DetailSwitch functionData={functionData} activeScreen={activeScreen} />
      <HeaderSearchInput inputData={searchData} />
    </View>
  );
};

export default DetailFunction;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
  },
});
