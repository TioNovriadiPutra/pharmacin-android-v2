import React from "react";
import { Drawer, Stack, StackBukuBesar, StackManajemen, StackObat, StackPabrikan, StackPembelian, StackPenjualan, StackStock } from "@utils/constant/navigation";
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
import DetailOpnameStock from "@pages/app/stock/DetailOpnameStock";
import DetailObat from "@pages/app/obat/DetailObat";

const AppStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        drawerType: "permanent",
        drawerStyle: {
          width: 68,
        },
        unmountOnBlur: true,
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
    <StackPenjualan.Navigator initialRouteName="TambahPenjualan">
      <StackPenjualan.Screen name="TambahPenjualan" component={TambahPenjualan} options={{ headerShown: false }} />
      <StackPenjualan.Screen name="KelolaPenjualan" component={KelolaPenjualan} options={{ headerShown: false }} />
    </StackPenjualan.Navigator>
  );
};

const StockStack = () => {
  return (
    <StackStock.Navigator initialRouteName="StockStock">
      <StackStock.Screen name="StockStock" component={StockStock} options={{ headerShown: false }} />
      <StackStock.Screen name="OpnameStock" component={OpnameStock} options={{ headerShown: false }} />
      <StackStock.Screen name="RiwayatOpnameStock" component={RiwayatOpnameStock} options={{ headerShown: false }} />
      <StackStock.Screen name="DetailOpnameStock" component={DetailOpnameStock} options={{ headerShown: false }} />
    </StackStock.Navigator>
  );
};

const ObatStack = () => {
  return (
    <StackObat.Navigator initialRouteName="KategoriObat">
      <StackObat.Screen name="KategoriObat" component={KategoriObat} options={{ headerShown: false }} />
      <StackObat.Screen name="KelolaObat" component={KelolaObat} options={{ headerShown: false }} />
      <StackObat.Screen name="DetailObat" component={DetailObat} options={{ headerShown: false }} />
    </StackObat.Navigator>
  );
};

const PabrikanStack = () => {
  return (
    <StackPabrikan.Navigator initialRouteName="PabrikanPabrikan">
      <StackPabrikan.Screen name="PabrikanPabrikan" component={Pabrikan} options={{ headerShown: false }} />
      <StackPabrikan.Screen name="DetailPabrikan" component={DetailPabrikan} options={{ headerShown: false }} />
    </StackPabrikan.Navigator>
  );
};

const PembelianStack = () => {
  return (
    <StackPembelian.Navigator initialRouteName="TambahPembelian">
      <StackPembelian.Screen name="TambahPembelian" component={TambahPembelian} options={{ headerShown: false }} />
      <StackPembelian.Screen name="KelolaPembelian" component={KelolaPembelian} options={{ headerShown: false }} />
    </StackPembelian.Navigator>
  );
};

const BukuBesarStack = () => {
  return (
    <StackBukuBesar.Navigator initialRouteName="PenjualanBukuBesar">
      <StackBukuBesar.Screen name="PenjualanBukuBesar" component={PenjualanBukuBesar} options={{ headerShown: false }} />
      <StackBukuBesar.Screen name="PembelianBukuBesar" component={PembelianBukuBesar} options={{ headerShown: false }} />
    </StackBukuBesar.Navigator>
  );
};

const ManajemenStack = () => {
  return (
    <StackManajemen.Navigator initialRouteName="KlinikManajemen">
      <StackManajemen.Screen name="KlinikManajemen" component={KlinikManajemen} options={{ headerShown: false }} />
      <StackManajemen.Screen name="KaryawanManajemen" component={KaryawanManajemen} options={{ headerShown: false }} />
      <StackManajemen.Screen name="RiwayatKasirManajemen" component={RiwayatKasirManajemen} options={{ headerShown: false }} />
    </StackManajemen.Navigator>
  );
};

export default AppStack;
