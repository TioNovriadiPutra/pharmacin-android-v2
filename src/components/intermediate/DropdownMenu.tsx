import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Animated, { SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { colors } from "@themes/colors";
import { DropdownItem } from "@utils/types/InputType";
import { sizeType } from "@themes/fonts";

type Props = {
  dropdownItem: DropdownItem[];
  anim: SharedValue<number>;
  chooseItem: (item: DropdownItem) => void;
};

const DropdownMenu = ({ dropdownItem, anim, chooseItem }: Props) => {
  const [dropLayout, setDropLayout] = useState(0);

  const dropdownAnimatedStyle = useAnimatedStyle(() => {
    const height = interpolate(anim.value, [0, 1], [0, dropLayout]);

    return {
      height,
    };
  });

  const onDropdownLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setDropLayout(height);
  };

  return (
    <Animated.View style={[styles.dropdown, dropdownAnimatedStyle]}>
      <View style={styles.dropdownLayout} onLayout={onDropdownLayout}>
        {dropdownItem.map((item, index) => (
          <TouchableOpacity key={index.toString()} style={[styles.dropdownItem, { borderBottomWidth: index < dropdownItem.length - 1 ? 1 : 0 }]} onPress={() => chooseItem(item)}>
            <Text style={[styles.dropdownLabel, sizeType.BodyText]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Animated.View>
  );
};

export default DropdownMenu;

const styles = StyleSheet.create({
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
