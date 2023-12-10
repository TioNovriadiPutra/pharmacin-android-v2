import ButtonType from "@utils/enums/buttonEnums";

interface CustomButtonType {
  label: string;
  btnType: keyof typeof ButtonType;
}

export { CustomButtonType };
