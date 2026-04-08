import Link from "next/link";
import { cartItems, paymentSummary, products } from "@/components/mock-data";

const categories = ["Semua", "Kopi", "Makanan", "Pastry", "Minuman"];
const paymentMethods = ["Tunai", "QRIS", "Transfer"];
const navLinks = [
  { href: "/kasir/dashboard", label: "Home", short: "H" },
  { href: "/kasir/transaksi", label: "Products", short: "P", active: true },
  { href: "/kasir/riwayat", label: "Reports", short: "R" },
  { href: "/kasir/shift", label: "Settings", short: "S" },
];

function getProductTag(product) {
  if (product.stock === 0) return "Habis";
  if (product.stock <= 10) return "Stok Tipis";
  return "Tersedia";
}

export default function CashierTransactionPage() {
  return (
    <main className="cashier-transaction-reference">
      <header className="cashier-transaction-topbar">
        <div className="cashier-reference-brand">
          <span className="cashier-reference-brand-icon">POS</span>
          <h1>Precision POS</h1>
        </div>
        <div className="cashier-reference-avatar">AN</div>
      </header>

      <section className="cashier-transaction-search">
        <div className="cashier-transaction-searchbox">
          <span>FIND</span>
          <input type="text" placeholder="Cari produk..." />
        </div>

        <div className="cashier-transaction-category-row">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={
                index === 0
                  ? "cashier-transaction-chip cashier-transaction-chip-active"
                  : "cashier-transaction-chip"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="cashier-transaction-product-grid">
        {products.map((item) => (
          <article key={item.sku} className="cashier-transaction-product-card">
            <div className="cashier-transaction-product-media">
              <div className="cashier-transaction-product-image">{item.sku.slice(-3)}</div>
              <b
                className={
                  getProductTag(item) === "Stok Tipis"
                    ? "cashier-product-tag cashier-product-tag-warning"
                    : getProductTag(item) === "Habis"
                      ? "cashier-product-tag cashier-product-tag-danger"
                      : "cashier-product-tag"
                }
              >
                {getProductTag(item)}
              </b>
            </div>
            <div className="cashier-transaction-product-copy">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="cashier-cart-floating">
        <div className="cashier-cart-mini">
          <div className="cashier-cart-mini-copy">
            <div className="cashier-cart-mini-icon">
              BAG
              <span>{cartItems.length}</span>
            </div>
            <div>
              <p>{cartItems.length} Items</p>
              <strong>{paymentSummary.subtotal}</strong>
            </div>
          </div>
          <button type="button" className="cashier-cart-pay-btn">
            Bayar Sekarang
            <span>GO</span>
          </button>
        </div>
      </section>

      <section className="cashier-cart-detail">
        <div className="cashier-cart-detail-head">
          <h2>Detail Keranjang</h2>
          <button type="button">Bersihkan</button>
        </div>

        <div className="cashier-cart-items">
          {cartItems.map((item) => (
            <article key={item.name} className="cashier-cart-item-row">
              <div className="cashier-cart-item-copy">
                <div className="cashier-cart-item-thumb">{item.name.slice(0, 2).toUpperCase()}</div>
                <div>
                  <p>{item.name}</p>
                  <span>
                    Qty: {item.qty} x {item.price}
                  </span>
                </div>
              </div>
              <strong>{item.subtotal}</strong>
            </article>
          ))}
        </div>

        <div className="cashier-cart-divider" />

        <div className="cashier-cart-summary">
          <div>
            <span>Subtotal</span>
            <strong>{paymentSummary.subtotal}</strong>
          </div>
          <div>
            <span>Diskon (Promo Akhir Tahun)</span>
            <strong className="cashier-cart-summary-discount">-Rp 5.000</strong>
          </div>
          <div>
            <span>Pajak (11%)</span>
            <strong>Rp 8.030</strong>
          </div>
          <div className="cashier-cart-summary-total">
            <span>Total Pembayaran</span>
            <strong>Rp 81.030</strong>
          </div>
        </div>

        <div className="cashier-cart-methods">
          <p>Metode Pembayaran</p>
          <div className="cashier-cart-method-grid">
            {paymentMethods.map((method, index) => (
              <button
                key={method}
                type="button"
                className={
                  index === 0
                    ? "cashier-cart-method cashier-cart-method-active"
                    : "cashier-cart-method"
                }
              >
                <b>{method.slice(0, 2).toUpperCase()}</b>
                <span>{method}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <nav className="cashier-reference-bottomnav">
        {navLinks.map((item) => (
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
