import { StyleSheet, View } from "react-native";
import React from "react";
import { CustomHeaderFunction } from "@utils/types/HeaderType";
import { CustomSwitchInput, CustomTextInput } from "@utils/types/InputType";
import HeaderSearchInput from "@components/intermediate/HeaderSearchInput";
import PharmacinSwitch from "@components/shared/PharmacinSwitch";

type Props = {
  functionData: CustomHeaderFunction[];
  activeScreen: number;
  setActiveScreen: React.Dispatch<React.SetStateAction<number>>;
};

const DetailFunction = ({ functionData, activeScreen, setActiveScreen }: Props) => {
  return (
    <View style={styles.container}>
      {functionData.map((item, index) => {
        if (item.type === "switch") {
          return (
            <PharmacinSwitch
              key={index.toString()}
              functionData={item.functionItem as CustomSwitchInput}
              activeScreen={activeScreen}
              setActiveScreen={setActiveScreen}
              style={styles.switch}
              btnStyle={styles.switch}
            />
          );
        } else if (item.type === "search") {
          return <HeaderSearchInput key={index.toString()} inputData={item.functionItem as CustomTextInput} />;
        }
      })}
    </View>
  );
};

export default DetailFunction;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 14,
  },
  switch: {
    flex: 1,
  },
});
