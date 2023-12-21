import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AppBukuBesarStackParamType,
  AppManajemenStackParamType,
  AppObatStackParamType,
  AppPabrikanParamType,
  AppPembelianStackParamType,
  AppPengaturanStackParamType,
  AppPenjualanStackParamType,
  AppRootDrawerParamType,
  AppStockStackParamType,
  AuthRootStackParamType,
} from "@utils/types/RootStackParamType";

const Stack = createNativeStackNavigator<AuthRootStackParamType>();
const StackPenjualan = createNativeStackNavigator<AppPenjualanStackParamType>();
const StackStock = createNativeStackNavigator<AppStockStackParamType>();
const StackObat = createNativeStackNavigator<AppObatStackParamType>();
const StackPabrikan = createNativeStackNavigator<AppPabrikanParamType>();
const StackPembelian = createNativeStackNavigator<AppPembelianStackParamType>();
const StackBukuBesar = createNativeStackNavigator<AppBukuBesarStackParamType>();
const StackManajemen = createNativeStackNavigator<AppManajemenStackParamType>();
const StackPengaturan = createNativeStackNavigator<AppPengaturanStackParamType>();
const Drawer = createDrawerNavigator<AppRootDrawerParamType>();

export { Stack, Drawer, StackPenjualan, StackStock, StackObat, StackPabrikan, StackPembelian, StackBukuBesar, StackManajemen, StackPengaturan };
