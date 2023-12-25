interface CustomInput {
  name: string;
  defaultValue?: string | number | DropdownItem | null;
  type: "text" | "password" | "dropdown" | "phone" | "static" | "currency" | "currencyStatic";
}

interface CustomTextInput extends CustomInput {
  placeholder: string;
  placeholderPosition?: "in" | "out";
}

interface CustomDropdownInput extends CustomTextInput {
  items: DropdownItem[];
}

interface DropdownItem {
  label: string;
  value: string | number;
}

interface CustomSwitchInput {
  items: SwitchItem[];
}

interface SwitchItem {
  label: string;
}

export { CustomInput, CustomTextInput, CustomDropdownInput, DropdownItem, CustomSwitchInput };
