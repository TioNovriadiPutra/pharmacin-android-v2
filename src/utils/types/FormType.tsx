import { CustomDropdownInput, CustomTextInput } from "./InputType";
import { CustomButtonType } from "./ButtonType";

interface FormType {
  title: string;
  inputs: (CustomTextInput | CustomDropdownInput)[][];
  submitButton?: CustomButtonType;
}

interface AuthFormType extends FormType {
  subTitle: string;
}

interface TransactionFormType {
  formData: FormType[];
  shoppingCart: ShoppingCartType;
}

interface ShoppingCartType {
  headers: string[];
}

export { FormType, AuthFormType, TransactionFormType, ShoppingCartType };
