type AppRootDrawerParamType = {
  Notifikasi: undefined;
  Dashboard: undefined;
  Penjualan: undefined;
  Stock: undefined;
  Obat: undefined;
  Pabrikan: undefined;
  Pembelian: undefined;
  BukuBesar: undefined;
  Manajemen: undefined;
};

type AuthRootStackParamType = {
  Login: undefined;
  Register: undefined;
};

type AppPenjualanStackParamType = {
  TambahPenjualan: undefined;
  KelolaPenjualan: undefined;
};

type AppStockStackParamType = {
  StockStock: undefined;
  OpnameStock: undefined;
  RiwayatOpnameStock: undefined;
};

type AppObatStackParamType = {
  KategoriObat: undefined;
  KelolaObat: undefined;
};

type AppPabrikanParamType = {
  PabrikanPabrikan: undefined;
  DetailPabrikan: { itemId: number };
};

type AppPembelianStackParamType = {
  TambahPembelian: undefined;
  KelolaPembelian: undefined;
};

type AppBukuBesarStackParamType = {
  PenjualanBukuBesar: undefined;
  PembelianBukuBesar: undefined;
};

type AppManajemenStackParamType = {
  KlinikManajemen: undefined;
  KaryawanManajemen: undefined;
  RiwayatKasirManajemen: undefined;
};

export {
  AppRootDrawerParamType,
  AuthRootStackParamType,
  AppPenjualanStackParamType,
  AppStockStackParamType,
  AppObatStackParamType,
  AppPabrikanParamType,
  AppPembelianStackParamType,
  AppBukuBesarStackParamType,
  AppManajemenStackParamType,
};
