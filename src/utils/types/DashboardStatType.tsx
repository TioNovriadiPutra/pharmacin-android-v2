import { ImageSourcePropType } from "react-native";

interface DashboardStatType {
  title: string;
  icon: ImageSourcePropType;
  stat: number;
  type: "number" | "currency";
}

export { DashboardStatType };
