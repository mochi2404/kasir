export const ownerStats = [
  { label: "Penjualan Hari Ini", value: "Rp 8.450.000", note: "+12% dari kemarin" },
  { label: "Transaksi Hari Ini", value: "126", note: "18 transaksi terakhir 1 jam lalu" },
  { label: "Omzet Bulan Ini", value: "Rp 214.300.000", note: "Target tercapai 78%" },
  { label: "Stok Menipis", value: "14 Produk", note: "6 butuh restok segera" },
];

export const cashierStats = [
  { label: "Transaksi Hari Ini", value: "34", note: "Shift aktif sejak 08.00" },
  { label: "Penjualan Shift Ini", value: "Rp 2.780.000", note: "Tunai + non tunai" },
  { label: "Status Shift", value: "Aktif", note: "Kas awal Rp 500.000" },
];

export const products = [
  {
    name: "Kopi Susu Gula Aren",
    sku: "SKU-001",
    category: "Minuman",
    price: "Rp 22.000",
    stock: 84,
    status: "Aktif",
    costPrice: "Rp 12.000",
    salePrice: "Rp 22.000",
    unit: "Cup",
    description: "Minuman kopi susu signature dengan gula aren.",
  },
  {
    name: "Croissant Butter",
    sku: "SKU-014",
    category: "Bakery",
    price: "Rp 18.000",
    stock: 12,
    status: "Aktif",
    costPrice: "Rp 9.500",
    salePrice: "Rp 18.000",
    unit: "Pcs",
    description: "Pastry butter renyah untuk display bakery harian.",
  },
  {
    name: "Matcha Latte",
    sku: "SKU-021",
    category: "Minuman",
    price: "Rp 26.000",
    stock: 7,
    status: "Stok Tipis",
    costPrice: "Rp 14.000",
    salePrice: "Rp 26.000",
    unit: "Cup",
    description: "Minuman matcha creamy dengan foam susu lembut.",
  },
  {
    name: "Cheese Danish",
    sku: "SKU-031",
    category: "Bakery",
    price: "Rp 20.000",
    stock: 0,
    status: "Habis",
    costPrice: "Rp 10.000",
    salePrice: "Rp 20.000",
    unit: "Pcs",
    description: "Pastry isi cream cheese untuk menu sarapan cepat.",
  },
];

export const transactions = [
  { id: "TRX-240408-001", date: "08 Apr 2026, 09:10", cashier: "Nadia", method: "QRIS", total: "Rp 118.000", status: "Selesai" },
  { id: "TRX-240408-002", date: "08 Apr 2026, 10:22", cashier: "Raka", method: "Tunai", total: "Rp 56.000", status: "Selesai" },
  { id: "TRX-240408-003", date: "08 Apr 2026, 10:47", cashier: "Nadia", method: "Transfer", total: "Rp 220.000", status: "Selesai" },
];

export const transactionRecords = [
  {
    id: "TRX-240408-001",
    dateLabel: "08 Apr 2026",
    timeLabel: "09:10:15",
    cashier: "Nadia Aulia",
    method: "QRIS",
    total: "Rp 118.000",
    status: "Selesai",
    customer: "Walk-in Customer",
    paid: "Rp 120.000",
    change: "Rp 2.000",
    subtotal: "Rp 108.000",
    discount: "- Rp 0",
    tax: "Rp 10.000",
    items: [
      { name: "Kopi Susu Gula Aren", qty: 2, price: "Rp 22.000", subtotal: "Rp 44.000", imageLabel: "KOPI" },
      { name: "Croissant Butter", qty: 1, price: "Rp 18.000", subtotal: "Rp 18.000", imageLabel: "BAKE" },
      { name: "Matcha Latte", qty: 2, price: "Rp 28.000", subtotal: "Rp 56.000", imageLabel: "MTC" },
    ],
  },
  {
    id: "TRX-240408-002",
    dateLabel: "08 Apr 2026",
    timeLabel: "10:22:04",
    cashier: "Raka Pratama",
    method: "Tunai",
    total: "Rp 56.000",
    status: "Selesai",
    customer: "Walk-in Customer",
    paid: "Rp 100.000",
    change: "Rp 44.000",
    subtotal: "Rp 56.000",
    discount: "- Rp 0",
    tax: "Rp 0",
    items: [
      { name: "Cheese Danish", qty: 1, price: "Rp 20.000", subtotal: "Rp 20.000", imageLabel: "CHS" },
      { name: "Americano", qty: 2, price: "Rp 18.000", subtotal: "Rp 36.000", imageLabel: "AMR" },
    ],
  },
  {
    id: "TRX-240408-003",
    dateLabel: "08 Apr 2026",
    timeLabel: "10:47:31",
    cashier: "Nadia Aulia",
    method: "Transfer",
    total: "Rp 220.000",
    status: "Selesai",
    customer: "Member Platinum",
    paid: "Rp 220.000",
    change: "Rp 0",
    subtotal: "Rp 220.000",
    discount: "- Rp 0",
    tax: "Rp 0",
    items: [
      { name: "Signature Beans 250gr", qty: 2, price: "Rp 85.000", subtotal: "Rp 170.000", imageLabel: "BEAN" },
      { name: "Cold Brew Bottle", qty: 1, price: "Rp 50.000", subtotal: "Rp 50.000", imageLabel: "COLD" },
    ],
  },
  {
    id: "TRX-240408-004",
    dateLabel: "08 Apr 2026",
    timeLabel: "11:15:42",
    cashier: "Andi Wijaya",
    method: "Kartu Debit",
    total: "Rp 450.000",
    status: "Selesai",
    customer: "Corporate Guest",
    paid: "Rp 450.000",
    change: "Rp 0",
    subtotal: "Rp 450.000",
    discount: "- Rp 0",
    tax: "Rp 0",
    items: [
      { name: "Meeting Package", qty: 3, price: "Rp 150.000", subtotal: "Rp 450.000", imageLabel: "PACK" },
    ],
  },
];

export const employees = [
  {
    id: "EMP-2024-001",
    name: "Alya Putri",
    role: "Owner",
    email: "alya@tokokamu.id",
    phone: "0812-1234-1234",
    status: "Aktif",
    branch: "Pusat - Sudirman, Jakarta",
    username: "alya.owner",
    password: "Precision2024!",
  },
  {
    id: "EMP-2024-089",
    name: "Nadia Aulia",
    role: "Kasir",
    email: "nadia@tokokamu.id",
    phone: "0812-7777-2222",
    status: "Aktif",
    branch: "Pusat - Sudirman, Jakarta",
    username: "nadia.kasir",
    password: "Precision2024!",
  },
  {
    id: "EMP-2024-114",
    name: "Raka Pratama",
    role: "Kasir",
    email: "raka@tokokamu.id",
    phone: "0812-8888-3333",
    status: "Nonaktif",
    branch: "Cabang - Dago, Bandung",
    username: "raka.bd",
    password: "Precision2024!",
  },
];

export const promotions = [
  { name: "Happy Hour Pagi", type: "Diskon 10%", period: "08 Apr - 30 Apr", target: "Semua Minuman", status: "Aktif" },
  { name: "Bundling Kopi + Pastry", type: "Paket Hemat", period: "10 Apr - 20 Apr", target: "Kategori Bakery", status: "Terjadwal" },
];

export const stockAdjustments = [
  {
    product: "Matcha Latte",
    category: "Minuman",
    current: 7,
    minimum: 10,
    reason: "Stok kritis",
    updated: "08 Apr 2026",
    status: "Kritis",
    unit: "cup",
    change: "-3 cup",
    actor: "Admin Utama",
    note: "Pemakaian tinggi saat jam makan siang",
  },
  {
    product: "Cheese Danish",
    category: "Pastry",
    current: 0,
    minimum: 8,
    reason: "Barang habis",
    updated: "08 Apr 2026",
    status: "Habis",
    unit: "pcs",
    change: "-12 pcs",
    actor: "Kasir Sore",
    note: "Display pastry habis terjual",
  },
  {
    product: "Premium Espresso Beans",
    category: "Bahan Baku",
    current: 4,
    minimum: 10,
    reason: "Restok baru",
    updated: "Tadi, 14:20",
    status: "Kritis",
    unit: "kg",
    change: "+20 kg",
    actor: "Admin Utama",
    note: "Pengiriman bulanan dari pemasok lokal - Batch #982",
  },
  {
    product: "Oat Milk 1L",
    category: "Susu & Dairy",
    current: 12,
    minimum: 5,
    reason: "Barang rusak",
    updated: "Kemarin, 18:45",
    status: "Aman",
    unit: "pcs",
    change: "-2 pcs",
    actor: "Kasir Sore",
    note: "Kemasan bocor saat proses unboxing stok baru",
  },
];

export const cartItems = [
  { name: "Kopi Susu Gula Aren", qty: 2, price: "Rp 22.000", subtotal: "Rp 44.000" },
  { name: "Croissant Butter", qty: 1, price: "Rp 18.000", subtotal: "Rp 18.000" },
  { name: "Matcha Latte", qty: 1, price: "Rp 26.000", subtotal: "Rp 26.000" },
];

export const paymentSummary = {
  subtotal: "Rp 88.000",
  discount: "Rp 8.000",
  tax: "Rp 8.800",
  total: "Rp 88.800",
  paid: "Rp 100.000",
  change: "Rp 11.200",
};

export function getTransactionById(id) {
  return transactionRecords.find((item) => item.id === id) || null;
}

export function getEmployeeById(id) {
  return employees.find((item) => item.id === id) || null;
}

export function getProductBySku(sku) {
  return products.find((item) => item.sku === sku) || null;
}
