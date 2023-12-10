import { CustomDropdownInput, CustomTextInput } from "./InputType";
import { CustomButtonType } from "./ButtonType";

interface AuthFormType {
  title: string;
  subTitle: string;
  inputs: (CustomTextInput | CustomDropdownInput)[][];
  submitButton: CustomButtonType;
}

export { AuthFormType };
