interface CustomInput {
  name: string;
  defaultValue?: string | null;
  type: "text" | "password" | "dropdown" | "phone";
}

interface CustomTextInput extends CustomInput {
  placeholder: string;
}

interface CustomDropdownInput extends CustomTextInput {
  items: DropdownItem[];
}

interface DropdownItem {
  label: string;
  value: string;
}

export { CustomInput, CustomTextInput, CustomDropdownInput, DropdownItem };
