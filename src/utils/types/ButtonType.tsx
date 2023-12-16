import ButtonType from "@utils/enums/buttonEnums";

interface CustomButtonType {
  label: string;
  btnType: keyof typeof ButtonType;
  onPress?: any;
}

export { CustomButtonType };
