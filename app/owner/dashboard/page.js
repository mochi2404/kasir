import Link from "next/link";
import { ownerStats, products } from "@/components/mock-data";

const filters = ["Hari ini", "Minggu ini", "Bulan ini"];

const topProducts = [
  { name: "Arabica Gold 250g", sold: "42 Terjual", price: "Rp 120k", code: "AG" },
  { name: "Ceramic Mug Series", sold: "38 Terjual", price: "Rp 85k", code: "CM" },
  { name: "Double Espresso Shot", sold: "35 Terjual", price: "Rp 25k", code: "DE" },
];

const stockAlerts = [
  {
    name: "Susu Full Cream 1L",
    left: "Tersisa: 2 Unit",
    action: "Restok",
    href: "/owner/stok",
    urgent: true,
  },
  {
    name: "Gula Pasir 1kg",
    left: "Tersisa: 5 Unit",
    action: "Detail",
    href: "/owner/stok",
    urgent: false,
  },
];

const bottomLinks = [
  { href: "/owner/dashboard", label: "Home", short: "H", active: true },
  { href: "/owner/produk", label: "Products", short: "P" },
  { href: "/owner/laporan", label: "Reports", short: "R" },
  { href: "/owner/pengaturan", label: "Settings", short: "S" },
];

export default function OwnerDashboardPage() {
  const [salesStat, transactionStat, omzetStat, stockStat] = ownerStats;
  const lowStockCount = products.filter((item) => item.stock <= 10).length;

  return (
    <main className="owner-dashboard-reference">
      <header className="owner-reference-topbar">
        <div className="owner-reference-brand">
          <span className="owner-reference-brand-icon">POS</span>
          <h1>Precision POS</h1>
        </div>
        <div className="owner-reference-avatar-wrap">
          <div className="owner-reference-avatar">AD</div>
          <span className="owner-reference-avatar-dot" />
        </div>
      </header>

      <section className="owner-reference-heading">
        <p>Selamat pagi, Adrian</p>
        <h2>Overview Bisnis</h2>
        <div className="owner-reference-filter-row">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={index === 0 ? "owner-filter-chip owner-filter-chip-active" : "owner-filter-chip"}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="owner-reference-stats">
        <article className="owner-reference-stat-card">
          <div className="owner-reference-stat-top">
            <span className="owner-reference-mini-icon owner-reference-mini-icon-primary">PAY</span>
            <b className="owner-reference-growth">+12%</b>
          </div>
          <p>Penjualan</p>
          <strong>{salesStat?.value || "Rp 0"}</strong>
        </article>

        <article className="owner-reference-stat-card">
          <div className="owner-reference-stat-top">
            <span className="owner-reference-mini-icon owner-reference-mini-icon-primary">TRX</span>
            <b className="owner-reference-growth">+5%</b>
          </div>
          <p>Transaksi</p>
          <strong>{transactionStat?.value || "0"}</strong>
        </article>

        <article className="owner-reference-stat-card">
          <div className="owner-reference-stat-top">
            <span className="owner-reference-mini-icon owner-reference-mini-icon-primary">OMZ</span>
          </div>
          <p>Omzet</p>
          <strong>{omzetStat?.value || "Rp 0"}</strong>
        </article>

        <article className="owner-reference-stat-card owner-reference-stat-alert">
          <div className="owner-reference-stat-top">
            <span className="owner-reference-mini-icon owner-reference-mini-icon-alert">STK</span>
            <b className="owner-reference-urgent">Urgent</b>
          </div>
          <p>Stok Menipis</p>
          <strong>{stockStat?.value || `${lowStockCount} Item`}</strong>
        </article>
      </section>

      <section className="owner-reference-chart">
        <div className="owner-reference-section-head">
          <h3>Tren Penjualan</h3>
          <Link href="/owner/laporan">Details</Link>
        </div>
        <div className="owner-reference-chart-card">
          {[40, 65, 55, 85, 45, 70, 95].map((height, index) => (
            <div key={height} className="owner-reference-chart-bar-wrap">
              <div
                className={index === 6 ? "owner-reference-chart-bar owner-reference-chart-bar-active" : "owner-reference-chart-bar"}
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="owner-reference-panels">
        <article className="owner-reference-panel">
          <div className="owner-reference-panel-head">
            <h3>3 Produk Terlaris</h3>
            <Link href="/owner/produk">Lihat Semua</Link>
          </div>
          <div className="owner-reference-product-list">
            {topProducts.map((item) => (
              <div key={item.name} className="owner-reference-product-item">
                <div className="owner-reference-product-thumb">{item.code}</div>
                <div className="owner-reference-product-copy">
                  <p>{item.name}</p>
                  <span>{item.sold}</span>
                </div>
                <strong>{item.price}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="owner-reference-panel owner-reference-panel-soft">
          <div className="owner-reference-panel-head">
            <h3>Notifikasi Stok</h3>
            <b>Critical</b>
          </div>
          <div className="owner-reference-alert-list">
            {stockAlerts.map((item) => (
              <div
                key={item.name}
                className={item.urgent ? "owner-reference-alert-item owner-reference-alert-item-urgent" : "owner-reference-alert-item"}
              >
                <div className="owner-reference-alert-copy">
                  <span>{item.urgent ? "!" : "?"}</span>
                  <div>
                    <p>{item.name}</p>
                    <small>{item.left}</small>
                  </div>
                </div>
                <Link href={item.href} className={item.urgent ? "owner-reference-alert-btn owner-reference-alert-btn-urgent" : "owner-reference-alert-btn"}>
                  {item.action}
                </Link>
              </div>
            ))}
          </div>
        </article>
      </section>

      <Link href="/owner/produk/new" className="owner-reference-fab">
        +
      </Link>

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
