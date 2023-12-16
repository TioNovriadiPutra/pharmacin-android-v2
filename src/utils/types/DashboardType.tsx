import { ImageSourcePropType } from "react-native";

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
}

export { DashboardStatType, DashboardTableDataType };
