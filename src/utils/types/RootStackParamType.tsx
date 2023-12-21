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
  Pengaturan: undefined;
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
  DetailOpnameStock: { itemId: number };
};

type AppObatStackParamType = {
  KategoriObat: undefined;
  KelolaObat: undefined;
  DetailObat: { itemId: number };
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

type AppPengaturanStackParamType = {
  PengaturanPengaturan: undefined;
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
  AppPengaturanStackParamType,
};
