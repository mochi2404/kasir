import Link from "next/link";
import { transactionRecords } from "@/components/mock-data";

const reportCards = [
  { label: "Item Terjual", value: "2,482", code: "ITM" },
  { label: "Transaksi", value: "854", code: "TRX" },
];

const weekBars = [
  { label: "Sen", height: 40 },
  { label: "Sel", height: 60 },
  { label: "Rab", height: 55 },
  { label: "Kam", height: 85 },
  { label: "Jum", height: 95, active: true },
  { label: "Sab", height: 70 },
  { label: "Min", height: 50 },
];

const bottomLinks = [
  { href: "/owner/dashboard", label: "Home", short: "H" },
  { href: "/owner/produk", label: "Products", short: "P" },
  { href: "/owner/laporan", label: "Reports", short: "R", active: true },
  { href: "/owner/pengaturan", label: "Settings", short: "S" },
];

export default function OwnerReportsPage() {
  return (
    <main className="owner-reports-reference">
      <header className="owner-reference-topbar">
        <div className="owner-reference-brand">
          <span className="owner-reference-brand-icon">POS</span>
          <h1>Precision POS</h1>
        </div>
        <div className="owner-reference-avatar">AD</div>
      </header>

      <section className="owner-reports-heading">
        <div>
          <h2>Laporan Penjualan</h2>
          <p>Analisis performa bisnis Anda secara real-time</p>
        </div>

        <div className="owner-reports-datebox">
          <div className="owner-reports-datecopy">
            <span>Rentang Waktu</span>
            <strong>01 Okt - 31 Okt 2023</strong>
          </div>
          <button type="button">FLT</button>
        </div>
      </section>

      <section className="owner-reports-summary">
        <article className="owner-reports-total-card">
          <div className="owner-reports-total-head">
            <span>Total Omzet</span>
            <b>UP</b>
          </div>
          <div>
            <h3>Rp 142.50M</h3>
            <p>+12.5% dari bulan lalu</p>
          </div>
        </article>

        {reportCards.map((item) => (
          <article key={item.label} className="owner-reports-mini-card">
            <div className="owner-reports-mini-icon">{item.code}</div>
            <div>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          </article>
        ))}
      </section>

      <section className="owner-reports-chart-card">
        <div className="owner-reports-card-head">
          <h3>Tren Penjualan Harian</h3>
          <span>MORE</span>
        </div>

        <div className="owner-reports-bars">
          {weekBars.map((item) => (
            <div key={item.label} className="owner-reports-bar-col">
              <div
                className={item.active ? "owner-reports-bar owner-reports-bar-active" : "owner-reports-bar"}
                style={{ height: `${item.height}%` }}
              />
              <small>{item.label}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="owner-reports-history">
        <div className="owner-reports-card-head">
          <h3>Riwayat Transaksi</h3>
          <Link href="/owner/transaksi">Lihat Semua</Link>
        </div>

        <div className="owner-reports-history-list">
          {transactionRecords.slice(0, 3).map((item, index) => (
            <Link
              key={item.id}
              href={`/owner/transaksi/${item.id}`}
              className={index === 1 ? "owner-reports-history-item owner-reports-history-item-active" : "owner-reports-history-item"}
            >
              <div className="owner-reports-history-icon">
                {item.method === "QRIS" ? "Q" : "P"}
              </div>
              <div className="owner-reports-history-copy">
                <div className="owner-reports-history-row">
                  <h4>{item.id}</h4>
                  <strong>{item.total}</strong>
                </div>
                <div className="owner-reports-history-row owner-reports-history-meta">
                  <span>Kasir: {item.cashier}</span>
                  <b>{item.method}</b>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <button type="button" className="owner-reports-export-btn">
          <span>DL</span>
          Ekspor Laporan (PDF/Excel)
        </button>
      </section>

      <nav className="owner-reference-bottomnav">
        {bottomLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              item.active
                ? "owner-reference-navitem owner-reference-navitem-active"
                : "owner-reference-navitem"
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
