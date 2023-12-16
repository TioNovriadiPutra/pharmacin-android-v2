import { AppPabrikanParamType } from "./RootStackParamType";

interface TableType {
  headers: string[];
  data: { id: number; item: TableDataType[] }[];
  tableAction?: ["edit", "delete"];
  detailDest?: keyof AppPabrikanParamType;
}

interface TableDataType {
  label: string | number;
  type: "text" | "currency" | "quantity";
}

export { TableType, TableDataType };
