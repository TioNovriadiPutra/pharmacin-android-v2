import React from "react";
import { Drawer, Stack } from "@utils/constant/navigation";
import Dashboard from "@pages/app/Dashboard";
import CustomDrawer from "@components/custom/CustomDrawer";
import Notifikasi from "@pages/app/Notifikasi";
import TambahPenjualan from "@pages/app/penjualan/TambahPenjualan";
import KelolaPenjualan from "@pages/app/penjualan/KelolaPenjualan";
import StockStock from "@pages/app/stock/StockStock";
import OpnameStock from "@pages/app/stock/OpnameStock";
import RiwayatOpnameStock from "@pages/app/stock/RiwayatOpnameStock";
import KategoriObat from "@pages/app/obat/KategoriObat";
import KelolaObat from "@pages/app/obat/KelolaObat";
import Pabrikan from "@pages/app/pabrikan/Pabrikan";
import DetailPabrikan from "@pages/app/pabrikan/DetailPabrikan";
import TambahPembelian from "@pages/app/pembelian/TambahPembelian";
import KelolaPembelian from "@pages/app/pembelian/KelolaPembelian";
import PenjualanBukuBesar from "@pages/app/bukuBesar/PenjualanBukuBesar";
import PembelianBukuBesar from "@pages/app/bukuBesar/PembelianBukuBesar";
import KlinikManajemen from "@pages/app/manajemen/KlinikManajemen";
import KaryawanManajemen from "@pages/app/manajemen/KaryawanManajemen";
import RiwayatKasirManajemen from "@pages/app/manajemen/RiwayatKasirManajemen";

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        drawerType: "permanent",
        drawerStyle: {
          width: 68,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Notifikasi" component={Notifikasi} options={{ headerShown: false }} />
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Drawer.Screen name="Penjualan" component={PenjualanStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Stock" component={StockStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Obat" component={ObatStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Pabrikan" component={PabrikanStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Pembelian" component={PembelianStack} options={{ headerShown: false }} />
      <Drawer.Screen name="BukuBesar" component={BukuBesarStack} options={{ headerShown: false }} />
      <Drawer.Screen name="Manajemen" component={ManajemenStack} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

const PenjualanStack = () => {
  return (
    <Stack.Navigator initialRouteName="TambahPenjualan">
      <Stack.Screen name="TambahPenjualan" component={TambahPenjualan} options={{ headerShown: false }} />
      <Stack.Screen name="KelolaPenjualan" component={KelolaPenjualan} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const StockStack = () => {
  return (
    <Stack.Navigator initialRouteName="StockStock">
      <Stack.Screen name="StockStock" component={StockStock} options={{ headerShown: false }} />
      <Stack.Screen name="OpnameStock" component={OpnameStock} options={{ headerShown: false }} />
      <Stack.Screen name="RiwayatOpnameStock" component={RiwayatOpnameStock} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const ObatStack = () => {
  return (
    <Stack.Navigator initialRouteName="KategoriObat">
      <Stack.Screen name="KategoriObat" component={KategoriObat} options={{ headerShown: false }} />
      <Stack.Screen name="KelolaObat" component={KelolaObat} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const PabrikanStack = () => {
  return (
    <Stack.Navigator initialRouteName="PabrikanPabrikan">
      <Stack.Screen name="PabrikanPabrikan" component={Pabrikan} options={{ headerShown: false }} />
      <Stack.Screen name="DetailPabrikan" component={DetailPabrikan} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const PembelianStack = () => {
  return (
    <Stack.Navigator initialRouteName="TambahPembelian">
      <Stack.Screen name="TambahPembelian" component={TambahPembelian} options={{ headerShown: false }} />
      <Stack.Screen name="KelolaPembelian" component={KelolaPembelian} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const BukuBesarStack = () => {
  return (
    <Stack.Navigator initialRouteName="PenjualanBukuBesar">
      <Stack.Screen name="PenjualanBukuBesar" component={PenjualanBukuBesar} options={{ headerShown: false }} />
      <Stack.Screen name="PembelianBukuBesar" component={PembelianBukuBesar} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const ManajemenStack = () => {
  return (
    <Stack.Navigator initialRouteName="KlinikManajemen">
      <Stack.Screen name="KlinikManajemen" component={KlinikManajemen} options={{ headerShown: false }} />
      <Stack.Screen name="KaryawanManajemen" component={KaryawanManajemen} options={{ headerShown: false }} />
      <Stack.Screen name="RiwayatKasirManajemen" component={RiwayatKasirManajemen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppStack;
