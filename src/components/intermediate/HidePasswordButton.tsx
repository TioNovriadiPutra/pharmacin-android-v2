import { Image, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  hide: boolean;
  onPress: () => void;
};

const HidePasswordButton = ({ hide, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={hide ? require("@assets/images/unsee.png") : require("@assets/images/see.png")} />
    </TouchableOpacity>
  );
};

export default HidePasswordButton;
