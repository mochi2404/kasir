import Link from "next/link";
import { cashierStats, transactionRecords } from "@/components/mock-data";

const shortcuts = [
  {
    href: "/kasir/riwayat",
    label: "Riwayat Transaksi",
    icon: "HIS",
  },
  {
    href: "/kasir/shift",
    label: "Buka/Tutup Shift",
    icon: "SFT",
  },
];

const bottomLinks = [
  { href: "/kasir/dashboard", label: "Home", short: "H", active: true },
  { href: "/kasir/transaksi", label: "Transaksi", short: "T" },
  { href: "/kasir/riwayat", label: "Riwayat", short: "R" },
  { href: "/kasir/shift", label: "Shift", short: "S" },
];

export default function CashierDashboardPage() {
  const [salesStat, transactionStat] = cashierStats;
  const latestTransaction = transactionRecords[0];

  return (
    <main className="cashier-dashboard-reference">
      <header className="cashier-reference-topbar">
        <div className="cashier-reference-brand">
          <span className="cashier-reference-brand-icon">POS</span>
          <h1>Precision POS</h1>
        </div>
        <div className="cashier-reference-avatar">AN</div>
      </header>

      <section className="cashier-reference-welcome">
        <h2>Halo, Andi</h2>
        <div className="cashier-reference-shift-status">
          <span className="status-dot" />
          <p>
            Status Shift: <strong>Aktif</strong>
          </p>
        </div>
      </section>

      <section>
        <Link href="/kasir/transaksi" className="cashier-reference-hero">
          <div className="cashier-reference-hero-icon">TRX</div>
          <span>Mulai Transaksi Baru</span>
        </Link>
      </section>

      <section className="cashier-reference-summary">
        <h3>Ringkasan Hari Ini</h3>
        <div className="cashier-reference-summary-grid">
          <article className="cashier-reference-stat">
            <div className="cashier-reference-stat-icon cashier-reference-stat-icon-primary">
              PAY
            </div>
            <div>
              <p>Total Penjualan</p>
              <strong>{salesStat?.value || "Rp 0"}</strong>
            </div>
          </article>

          <article className="cashier-reference-stat">
            <div className="cashier-reference-stat-icon cashier-reference-stat-icon-secondary">
              TRX
            </div>
            <div>
              <p>Total Transaksi</p>
              <strong>{transactionStat?.value || "0"}</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="cashier-reference-shortcuts">
        <h3>Menu Operasional</h3>
        <div className="cashier-reference-shortcut-list">
          {shortcuts.map((shortcut) => (
            <Link
              key={shortcut.href}
              href={shortcut.href}
              className="cashier-reference-shortcut-item"
            >
              <div className="cashier-reference-shortcut-copy">
                <div className="cashier-reference-shortcut-icon">{shortcut.icon}</div>
                <span>{shortcut.label}</span>
              </div>
              <b>GO</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="cashier-reference-last">
        <div className="cashier-reference-last-head">
          <h3>Transaksi Terakhir</h3>
          <Link href={`/kasir/riwayat/${latestTransaction?.id || ""}`}>Lihat Detail</Link>
        </div>
        <div className="cashier-reference-last-card">
          <strong>{latestTransaction?.id || "TRX-NA"}</strong>
          <p>{latestTransaction?.total || "Rp 0"}</p>
          <span>
            {latestTransaction?.cashier || "Kasir"} • {latestTransaction?.method || "-"}
          </span>
        </div>
      </section>

      <nav className="cashier-reference-bottomnav">
        {bottomLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              item.active
                ? "cashier-reference-navitem cashier-reference-navitem-active"
                : "cashier-reference-navitem"
            }
          >
            <b>{item.short}</b>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </main>
  );
}
