import { DrawerItem } from "@utils/types/DrawerType";

export const drawerItemList: DrawerItem[] = [
  {
    label: "Dashboard",
    activeIcon: require("@assets/images/dashboardActive.png"),
    inactiveIcon: require("@assets/images/dashboardInactive.png"),
    destination: "Dashboard",
  },
  {
    label: "Penjualan",
    activeIcon: require("@assets/images/penjualanActive.png"),
    inactiveIcon: require("@assets/images/penjualanInactive.png"),
    destination: "Penjualan",
    subMenu: [
      {
        label: "Tambah Penjualan",
        destination: "TambahPenjualan",
      },
      {
        label: "Kelola Penjualan",
        destination: "KelolaPenjualan",
      },
    ],
  },
  {
    label: "Stock",
    activeIcon: require("@assets/images/stockActive.png"),
    inactiveIcon: require("@assets/images/stockInactive.png"),
    destination: "Stock",
    subMenu: [
      {
        label: "Stock",
        destination: "StockStock",
      },
      {
        label: "Opname",
        destination: "OpnameStock",
      },
      {
        label: "Riwayat Opname",
        destination: "RiwayatOpnameStock",
      },
    ],
  },
  {
    label: "Obat",
    activeIcon: require("@assets/images/obatActive.png"),
    inactiveIcon: require("@assets/images/obatInactive.png"),
    destination: "Obat",
    subMenu: [
      {
        label: "Kategori",
        destination: "KategoriObat",
      },
      {
        label: "Kelola Obat",
        destination: "KelolaObat",
      },
    ],
  },
  {
    label: "Pabrikan",
    activeIcon: require("@assets/images/pabrikanActive.png"),
    inactiveIcon: require("@assets/images/pabrikanInactive.png"),
    destination: "Pabrikan",
  },
  {
    label: "Pembelian",
    activeIcon: require("@assets/images/pembelianActive.png"),
    inactiveIcon: require("@assets/images/pembelianInactive.png"),
    destination: "Pembelian",
    subMenu: [
      {
        label: "Tambah Pembelian",
        destination: "TambahPembelian",
      },
      {
        label: "Kelola Pembelian",
        destination: "KelolaPembelian",
      },
    ],
  },
  {
    label: "Buku Besar",
    activeIcon: require("@assets/images/bukuBesarActive.png"),
    inactiveIcon: require("@assets/images/bukuBesarInactive.png"),
    destination: "BukuBesar",
    subMenu: [
      {
        label: "Penjualan",
        destination: "PenjualanBukuBesar",
      },
      {
        label: "Pembelian",
        destination: "PembelianBukuBesar",
      },
    ],
  },
  {
    label: "Manajemen",
    activeIcon: require("@assets/images/manajemenActive.png"),
    inactiveIcon: require("@assets/images/manajemenInactive.png"),
    destination: "Manajemen",
    subMenu: [
      {
        label: "Klinik",
        destination: "KlinikManajemen",
      },
      {
        label: "Karyawan",
        destination: "KaryawanManajemen",
      },
      {
        label: "Riwayat Kasir",
        destination: "RiwayatKasirManajemen",
      },
    ],
  },
];
