import { CustomDetailHeader } from "./HeaderType";
import { AppObatStackParamType, AppPabrikanParamType, AppStockStackParamType } from "./RootStackParamType";

interface TableType {
  headers: string[];
  data: { id: number; item: TableDataType[] }[];
  tableAction?: TableActionType[];
  detailDest?: keyof AppPabrikanParamType | keyof AppStockStackParamType | keyof AppObatStackParamType;
}

interface TableActionType {
  type: "edit" | "delete" | "invoice" | "opname";
  onPress: (id: number) => void;
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

export { TableType, TableActionType, TableDataType, DetailDataType, MainDetailType, MainDetailDataType, MainDetailStatType, SwitchTableType };
