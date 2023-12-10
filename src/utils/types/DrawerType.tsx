import { ImageSourcePropType } from "react-native";

interface DrawerItem {
  label: string;
  activeIcon: ImageSourcePropType;
  inactiveIcon: ImageSourcePropType;
  destination: string;
  subMenu?: DrawerSubItem[];
}

interface DrawerSubItem {
  label: string;
  destination: string;
}

export { DrawerItem, DrawerSubItem };
