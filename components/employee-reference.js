import Link from "next/link";

const roleCards = [
  {
    name: "Kasir",
    tone: "recommended",
    description:
      "Akses terbatas pada modul penjualan, manajemen kas, dan pengembalian barang dasar.",
  },
  {
    name: "Supervisor",
    tone: "default",
    description:
      "Akses penuh pada modul penjualan, inventaris, dan otorisasi diskon khusus.",
  },
  {
    name: "Admin Toko",
    tone: "default",
    description:
      "Akses laporan keuangan cabang dan pengaturan data produk lokal.",
  },
];

export function EmployeeDetailReference({ employee, mode = "new" }) {
  const isNew = mode === "new";
  const currentRole = employee?.role || "Kasir";

  return (
    <section className="employee-reference">
      <div className="editorial-header">
        <div className="crumbs">
          <Link href="/owner/dashboard">Dashboard</Link>
          <span>/</span>
          <Link href="/owner/karyawan">Karyawan</Link>
          <span>/</span>
          <strong>{isNew ? "Tambah Karyawan Baru" : "Detail Profil Karyawan"}</strong>
        </div>
        <h2>{isNew ? "Tambah Karyawan Baru" : "Detail Profil Karyawan"}</h2>
        <p>
          Kelola data personal, peran akses, dan penempatan cabang untuk
          memastikan operasional toko tetap efisien dan aman.
        </p>
      </div>

      <section className="employee-layout">
        <div className="employee-main-col">
          <article className="employee-panel">
            <div className="employee-section-head">
              <div className="section-icon section-icon-primary">person</div>
              <h3>Informasi Pribadi</h3>
            </div>

            <div className="employee-form-grid">
              <label>
                <span>Nama Lengkap</span>
                <input
                  type="text"
                  defaultValue={employee?.name || ""}
                  placeholder="e.g. Budi Santoso"
                />
              </label>
              <label>
                <span>Email Karyawan</span>
                <input
                  type="email"
                  defaultValue={employee?.email || ""}
                  placeholder="budi.s@precisionpos.com"
                />
              </label>
              <label>
                <span>No HP / WhatsApp</span>
                <div className="prefix-input">
                  <span>+62</span>
                  <input
                    type="tel"
                    defaultValue={employee?.phone?.replace(/^0/, "") || ""}
                    placeholder="812 3456 7890"
                  />
                </div>
              </label>
              <label>
                <span>Password Awal</span>
                <input
                  type="text"
                  defaultValue={employee?.password || "Precision2024!"}
                />
              </label>
            </div>
          </article>

          <article className="employee-panel">
            <div className="employee-section-head">
              <div className="section-icon section-icon-secondary">map</div>
              <h3>Penempatan & Cabang</h3>
            </div>

            <div className="employee-form-grid">
              <label>
                <span>Penempatan Cabang</span>
                <select defaultValue={employee?.branch || "Pusat - Sudirman, Jakarta"}>
                  <option>Pusat - Sudirman, Jakarta</option>
                  <option>Cabang - Dago, Bandung</option>
                  <option>Cabang - Malioboro, Yogyakarta</option>
                  <option>Gudang Utama - Bekasi</option>
                </select>
              </label>
              <label>
                <span>ID Karyawan (Otomatis)</span>
                <input
                  type="text"
                  value={employee?.id || "EMP-2024-NEW"}
                  disabled
                  readOnly
                />
              </label>
            </div>

            <div className="info-box">
              <div className="section-icon section-icon-primary">info</div>
              <div>
                <h4>Izin Akses Multi-Cabang</h4>
                <p>
                  Karyawan dengan role Supervisor ke atas dapat diberikan akses
                  melihat laporan dari cabang lain melalui pengaturan otorisasi.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="employee-side-col">
          <article className="employee-panel">
            <div className="employee-section-head">
              <div className="section-icon section-icon-accent">key</div>
              <h3>Hak Akses</h3>
            </div>
            <div className="role-card-list">
              {roleCards.map((role) => {
                const active = role.name === currentRole;
                return (
                  <article
                    key={role.name}
                    className={`role-card ${active ? "role-card-active" : ""}`}
                  >
                    <div className="role-card-top">
                      <span>{active ? "Rekomendasi" : "Role"}</span>
                      {active ? <strong>Aktif</strong> : null}
                    </div>
                    <h4>{role.name}</h4>
                    <p>{role.description}</p>
                  </article>
                );
              })}
            </div>
          </article>

          <article className="employee-panel">
            <h3>Status Akun</h3>
            <div className="status-box">
              <div>
                <strong>{employee?.status || "Aktif"}</strong>
                <span>Dapat langsung login</span>
              </div>
              <div className="toggle-pill">
                <div className="toggle-knob" />
              </div>
            </div>

            <div className="employee-actions">
              <button className="btn btn-primary">
                {isNew ? "Simpan Karyawan Baru" : "Simpan Perubahan"}
              </button>
              <Link href="/owner/karyawan" className="btn btn-secondary">
                Batalkan Perubahan
              </Link>
            </div>
          </article>
        </div>
      </section>
    </section>
  );
}
