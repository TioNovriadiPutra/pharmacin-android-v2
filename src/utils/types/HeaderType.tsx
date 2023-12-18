import { CustomButtonType } from "./ButtonType";
import { CustomSwitchInput, CustomTextInput } from "./InputType";

interface CustomHeader {
  title: string;
  subTitle?: string;
  function: CustomHeaderFunction[];
}

interface CustomDetailHeader extends CustomHeader {
  type: "detail" | "opname";
  onPress?: any;
}

interface CustomHeaderFunction {
  type: "button" | "search" | "switch";
  functionItem: CustomButtonType | CustomTextInput | CustomSwitchInput;
}

export { CustomHeader, CustomHeaderFunction, CustomDetailHeader };
