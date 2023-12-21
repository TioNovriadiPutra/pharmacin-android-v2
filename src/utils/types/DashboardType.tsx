import { ImageSourcePropType } from "react-native";
import { TableDataType } from "./TableType";

interface DashboardStatType {
  title: string;
  icon: ImageSourcePropType;
  stat: number;
  type: "number" | "currency";
}

interface DashboardTableDataType {
  title: string;
  headers: string[];
  destination: {
    parent: string;
    child?: string;
  };
  data?: { id: number; item: TableDataType[] }[];
}

export { DashboardStatType, DashboardTableDataType };
