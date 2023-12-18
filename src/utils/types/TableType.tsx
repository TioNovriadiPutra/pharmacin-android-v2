import { CustomDetailHeader } from "./HeaderType";
import { AppObatStackParamType, AppPabrikanParamType, AppStockStackParamType } from "./RootStackParamType";

interface TableType {
  headers: string[];
  data: { id: number; item: TableDataType[] }[];
  tableAction?: Array<"edit" | "delete" | "invoice" | "opname">;
  detailDest?: keyof AppPabrikanParamType | keyof AppStockStackParamType | keyof AppObatStackParamType;
}

interface TableDataType {
  label: string | number;
  status?: boolean;
  type: "text" | "currency" | "quantity" | "opnameDate";
}

interface SwitchTableType {
  screenData: TableType[];
}

interface DetailDataType {
  pageHeader: CustomDetailHeader;
  detailData: TableType[];
}

interface MainDetailType {
  statData: MainDetailStatType[];
  detailData: MainDetailDataType[];
}

interface MainDetailDataType {
  label: string;
  value?: string | number;
  type: "text" | "currency";
}

interface MainDetailStatType {
  stat: number;
  label: string;
  color: string;
  textColor: string;
}

export { TableType, TableDataType, DetailDataType, MainDetailType, MainDetailDataType, MainDetailStatType, SwitchTableType };
