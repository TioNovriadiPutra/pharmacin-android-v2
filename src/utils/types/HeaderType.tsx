import { CustomButtonType } from "./ButtonType";
import { CustomTextInput } from "./InputType";

interface CustomHeader {
  title: string;
  subTitle?: string;
  function: CustomHeaderFunction[];
}

interface CustomHeaderFunction {
  type: "button" | "search";
  functionItem: CustomButtonType | CustomTextInput;
}

export { CustomHeader, CustomHeaderFunction };
