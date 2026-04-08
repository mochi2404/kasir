const roleList = [
  "Super Admin",
  "Manajer Toko",
  "Kasir Utama",
  "Staff Gudang",
];

const permissionModules = [
  {
    title: "Laporan",
    tone: "primary",
    permissions: [
      {
        name: "Lihat Laporan Penjualan",
        desc: "Akses penuh ke grafik dan ringkasan harian.",
        checked: true,
      },
      {
        name: "Ekspor Data Laporan",
        desc: "Kemampuan mengunduh format CSV dan Excel.",
        checked: true,
      },
    ],
  },
  {
    title: "Harga & Inventori",
    tone: "secondary",
    permissions: [
      {
        name: "Ubah Harga Jual",
        desc: "Izin untuk memperbarui harga produk di etalase.",
        checked: true,
      },
      {
        name: "Kelola Stok Fisik",
        desc: "Menyesuaikan jumlah stok masuk dan keluar.",
        checked: true,
      },
    ],
  },
  {
    title: "Diskon & Promo",
    tone: "accent",
    permissions: [
      {
        name: "Buat Kode Promo",
        desc: "Membuat campaign diskon untuk pelanggan.",
        checked: true,
      },
      {
        name: "Otorisasi Diskon Manual",
        desc: "Memberikan potongan harga di meja kasir.",
        checked: false,
      },
    ],
  },
  {
    title: "Retur & Refund",
    tone: "dark",
    permissions: [
      {
        name: "Proses Pengembalian",
        desc: "Memproses barang yang dikembalikan pelanggan.",
        checked: true,
      },
      {
        name: "Otorisasi Refund Dana",
        desc: "Persetujuan pengembalian dana tunai atau saldo.",
        checked: true,
      },
    ],
  },
];

function moduleToneClass(tone) {
  if (tone === "primary") return "perm-icon perm-icon-primary";
  if (tone === "secondary") return "perm-icon perm-icon-secondary";
  if (tone === "accent") return "perm-icon perm-icon-accent";
  return "perm-icon perm-icon-dark";
}

export function PermissionReference() {
  return (
    <section className="permission-reference">
      <div className="permission-heading">
        <h2>Manajemen Hak Akses</h2>
        <p>Kelola peran pengguna dan izin operasional sistem secara mendetail.</p>
      </div>

      <div className="permission-layout">
        <aside className="permission-sidebar">
          <h3>Daftar Role</h3>
          <div className="permission-role-list">
            {roleList.map((role, index) => (
              <button
                key={role}
                className={`permission-role-btn ${index === 0 ? "permission-role-btn-active" : ""}`}
              >
                {role}
              </button>
            ))}
          </div>
          <button className="permission-add-role">Tambah Role Baru</button>
        </aside>

        <section className="permission-main-card">
          <div className="permission-main-head">
            <div>
              <h3>Pengaturan Izin: Super Admin</h3>
              <p>Konfigurasi izin akses untuk setiap modul aplikasi.</p>
            </div>
            <div className="quick-actions">
              <button className="btn btn-secondary">Batalkan</button>
              <button className="btn btn-primary">Simpan Perubahan</button>
            </div>
          </div>

          <div className="permission-grid">
            {permissionModules.map((module) => (
              <article className="permission-module-card" key={module.title}>
                <div className="permission-module-head">
                  <div className={moduleToneClass(module.tone)}>{module.title.slice(0, 2)}</div>
                  <h4>{module.title}</h4>
                </div>
                <div className="permission-check-list">
                  {module.permissions.map((permission) => (
                    <label className="permission-check-row" key={permission.name}>
                      <input type="checkbox" defaultChecked={permission.checked} />
                      <div>
                        <strong>{permission.name}</strong>
                        <span>{permission.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
