const mockUsers = [
  {
    id: 1,
    name: "Alya Putri",
    email: "owner@tokokamu.id",
    password: "owner123",
    role: "owner",
  },
  {
    id: 2,
    name: "Nadia Aulia",
    email: "kasir@tokokamu.id",
    password: "kasir123",
    role: "kasir",
  },
];

const mockProducts = [
  { id: 1, name: "Kopi Susu Gula Aren", sku: "SKU-001", category: "Minuman", price: 22000, stock: 84 },
  { id: 2, name: "Croissant Butter", sku: "SKU-014", category: "Bakery", price: 18000, stock: 12 },
  { id: 3, name: "Matcha Latte", sku: "SKU-021", category: "Minuman", price: 26000, stock: 7 },
];

const mockTransactions = [
  { id: "TRX-240408-001", cashier: "Nadia", method: "QRIS", total: 118000, status: "selesai" },
  { id: "TRX-240408-002", cashier: "Raka", method: "Tunai", total: 56000, status: "selesai" },
];

function findUser(email, password) {
  return mockUsers.find((user) => user.email === email && user.password === password) || null;
}

function isValidHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

async function checkUrlFromServer(target) {
  const startedAt = Date.now();
  const response = await fetch(target, {
    method: "GET",
    redirect: "follow",
    headers: {
      "User-Agent": "KasirLinkChecker/1.0",
    },
    cache: "no-store",
  });
  const text = await response.text();

  return {
    url: target,
    status: response.status,
    statusText: response.statusText,
    contentType: response.headers.get("content-type") || "-",
    elapsedMs: Date.now() - startedAt,
    preview: text.replace(/\s+/g, " ").slice(0, 240) || "(kosong)",
  };
}

export {
  mockUsers,
  mockProducts,
  mockTransactions,
  findUser,
  isValidHttpUrl,
  checkUrlFromServer,
};
