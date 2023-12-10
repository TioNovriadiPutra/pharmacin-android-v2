import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "@themes/colors";
import { useController, useForm } from "react-hook-form";
import { sizeType } from "@themes/fonts";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { CustomDropdownInput, DropdownItem } from "@utils/types/InputType";

type Props = {
  inputData: CustomDropdownInput;
  control: ReturnType<typeof useForm>["control"];
};

const PharmacinDropdown = ({ inputData, control }: Props) => {
  const [showDrop, setShowDrop] = useState(false);
  const [dropLayout, setDropLayout] = useState(0);

  const dropdownAnim = useSharedValue(0);

  const { field } = useController({
    name: inputData.name,
    defaultValue: inputData.defaultValue,
    control,
  });

  const onDropdownLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setDropLayout(height);
  };

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

  const dropdownAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(dropdownAnim.value, [0, 1], [0, dropLayout]);

    return {
      height,
    };
  });

  const dropdownIconAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(dropdownAnim.value, [0, 1], [0, 180]);

    return {
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onDropdown}>
        <Text style={[styles.input, sizeType.H4, { color: field.value === null ? colors.Placeholder : colors.Black }]}>{field.value === null ? inputData.placeholder : field.value.label}</Text>

        <Animated.Image source={require("@assets/images/dropdown.png")} style={dropdownIconAnimatedStyle} />
      </TouchableOpacity>

      <Animated.View style={[styles.dropdown, dropdownAnimatedStyle]}>
        <View style={styles.dropdownLayout} onLayout={onDropdownLayout}>
          {inputData.items.map((item, index) => (
            <TouchableOpacity key={index.toString()} style={[styles.dropdownItem, { borderBottomWidth: index < inputData.items.length - 1 ? 1 : 0 }]} onPress={() => chooseItem(item)}>
              <Text style={styles.dropdownLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Animated.View>
    </View>
  );
};

export default PharmacinDropdown;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.Border,
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
  dropdown: {
    backgroundColor: colors.White,
    elevation: 5,
    borderRadius: 8,
    position: "absolute",
    zIndex: 999999,
    left: 0,
    right: 0,
    top: "120%",
    overflow: "hidden",
  },
  dropdownLayout: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  dropdownItem: {
    paddingVertical: 17,
    paddingHorizontal: 12,
    borderBottomColor: colors.Bar,
  },
  dropdownLabel: {
    color: colors.Black,
  },
});
