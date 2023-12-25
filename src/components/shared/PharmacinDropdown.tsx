import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "@themes/colors";
import { useController, useForm } from "react-hook-form";
import { sizeType } from "@themes/fonts";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { CustomDropdownInput, DropdownItem } from "@utils/types/InputType";
import DropdownMenu from "@components/intermediate/DropdownMenu";
import { ValidationErrorMessageType } from "@utils/types/FormType";
import { customStyles } from "@themes/styles";

type Props = {
  inputData: CustomDropdownInput;
  control: ReturnType<typeof useForm>["control"];
  validationErrorMessage?: ValidationErrorMessageType | null;
};

const PharmacinDropdown = ({ inputData, control, validationErrorMessage }: Props) => {
  const [showDrop, setShowDrop] = useState(false);

  const dropdownAnim = useSharedValue(0);

  const { field } = useController({
    name: inputData.name,
    defaultValue: inputData.defaultValue,
    control,
  });

  const onDropdown = () => {
    if (showDrop) {
      dropdownAnim.value = withTiming(0, { duration: 500 });
    } else {
      dropdownAnim.value = withTiming(1, { duration: 500 });
    }
    setShowDrop((prevState) => !prevState);
  };

  const chooseItem = (item: DropdownItem) => {
    field.onChange(item);
    dropdownAnim.value = withTiming(0, { duration: 500 });
    setShowDrop(false);
  };

  const dropdownIconAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(dropdownAnim.value, [0, 1], [0, 180]);

    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  return (
    <View style={styles.mainContainer}>
      {inputData.placeholderPosition === "out" && <Text style={[styles.placeholder, sizeType.H3]}>{inputData.placeholder}</Text>}

      <TouchableOpacity style={[styles.container, { borderColor: validationErrorMessage ? colors.Danger : colors.Border }]} onPress={onDropdown}>
        <Text style={[styles.input, sizeType.H4, { color: field.value === null ? colors.Placeholder : colors.Black }]}>
          {field.value === null ? (inputData.placeholderPosition === "out" ? "" : inputData.placeholder) : field.value.label}
        </Text>

        <Animated.Image source={require("@assets/images/dropdown.png")} style={dropdownIconAnimatedStyle} />
      </TouchableOpacity>

      {validationErrorMessage && <Text style={[customStyles.errorMessage, sizeType.H4]}>{validationErrorMessage.message}</Text>}

      <DropdownMenu dropdownItem={inputData.items} anim={dropdownAnim} chooseItem={chooseItem} />
    </View>
  );
};

export default PharmacinDropdown;

const styles = StyleSheet.create({
  mainContainer: {
    gap: 6,
  },
  container: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 10,
  },
  input: {
    flex: 1,
  },
  placeholder: {
    color: colors.Placeholder,
  },
});
