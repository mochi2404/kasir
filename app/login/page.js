import Link from "next/link";

const demoAccounts = [
  {
    href: "/owner/dashboard",
    label: "Masuk Sebagai Owner",
    note: "Akses dashboard, laporan, stok, karyawan, dan pengaturan toko.",
  },
  {
    href: "/kasir/dashboard",
    label: "Masuk Sebagai Kasir",
    note: "Masuk ke area transaksi, riwayat penjualan, dan shift kasir.",
  },
];

export default function LoginPage() {
  return (
    <main className="login-reference-page">
      <div className="login-reference-branding">
        <div className="login-reference-logo-row">
          <span className="login-reference-store-icon">POS</span>
          <div>
            <h1>Precision POS</h1>
            <p>The Digital Concierge</p>
          </div>
        </div>
      </div>

      <section className="login-reference-shell">
        <div className="login-reference-card">
          <header className="login-reference-header">
            <h2>Selamat Datang</h2>
            <p>Silakan masuk untuk mengelola toko Anda hari ini.</p>
          </header>

          <form className="login-reference-form">
            <label className="login-reference-field">
              <span>Email</span>
              <div className="login-reference-input">
                <b>MAIL</b>
                <input type="email" placeholder="nama@perusahaan.com" />
              </div>
            </label>

            <label className="login-reference-field">
              <div className="login-reference-field-head">
                <span>Password</span>
                <a href="#">Lupa Password?</a>
              </div>
              <div className="login-reference-input">
                <b>LOCK</b>
                <input type="password" placeholder="********" />
              </div>
            </label>

            <label className="login-reference-check">
              <input type="checkbox" />
              <span>Ingat Saya</span>
            </label>

            <button type="button" className="btn btn-primary login-reference-submit">
              Masuk
              <span>GO</span>
            </button>
          </form>

          <footer className="login-reference-footer">
            <p>
              Belum memiliki akun? <a href="#">Hubungi Admin</a>
            </p>
          </footer>
        </div>

        <div className="login-reference-support">
          <div className="login-reference-status">
            <div className="status-dot" />
            <span>System Operational</span>
          </div>
          <div className="login-reference-meta">
            <span>v2.4.0</span>
            <a href="#">Support</a>
          </div>
        </div>

        <section className="login-reference-demo">
          <div className="login-reference-demo-head">
            <span className="eyebrow">Akun Demo</span>
            <h3>Pilih role untuk masuk ke halaman yang sudah terhubung.</h3>
            <p>
              Demo ini langsung membawa kamu ke dashboard owner atau kasir
              sambil menunggu autentikasi backend final.
            </p>
          </div>

          <div className="login-reference-demo-grid">
            {demoAccounts.map((account) => (
              <Link key={account.href} href={account.href} className="login-reference-demo-card">
                <strong>{account.label}</strong>
                <span>{account.note}</span>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
