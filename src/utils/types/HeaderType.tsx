import { CustomButtonType } from "./ButtonType";

interface CustomHeader {
  title: string;
  function: CustomHeaderFunction[];
}

interface CustomHeaderFunction {
  type: "button" | "search";
  functionItem: CustomButtonType;
}

export { CustomHeader };
