import Link from "next/link";
import { products } from "@/components/mock-data";

const categories = ["Semua", "Minuman", "Makanan", "Elektronik", "Lainnya"];

const bottomLinks = [
  { href: "/owner/dashboard", label: "Home", short: "H" },
  { href: "/owner/produk", label: "Products", short: "P", active: true },
  { href: "/owner/laporan", label: "Reports", short: "R" },
  { href: "/owner/pengaturan", label: "Settings", short: "S" },
];

function getCategory(product) {
  if (product.category === "Bakery") return "Makanan";
  if (product.category === "Minuman") return "Minuman";
  return "Lainnya";
}

function getStockTone(product) {
  if (product.stock <= 5) return "critical";
  if (product.stock <= 10) return "warning";
  return "safe";
}

function getStockLabel(product) {
  if (product.stock <= 5) return "Kritis";
  return "Aman";
}

export default function OwnerProductsPage() {
  return (
    <main className="owner-products-reference">
      <header className="owner-reference-topbar">
        <div className="owner-reference-brand">
          <span className="owner-reference-brand-icon">POS</span>
          <h1>Precision POS</h1>
        </div>
        <div className="owner-reference-avatar">AD</div>
      </header>

      <section className="owner-products-head">
        <div className="owner-products-head-row">
          <h2>Products</h2>
          <Link href="/owner/produk/new" className="owner-products-add-btn">
            <span>+</span>
            Tambah Produk
          </Link>
        </div>

        <div className="owner-products-search-wrap">
          <div className="owner-products-search">
            <span>SRC</span>
            <input type="text" placeholder="Cari nama produk atau SKU..." />
          </div>

          <div className="owner-products-category-row">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={
                  index === 0
                    ? "owner-products-chip owner-products-chip-active"
                    : "owner-products-chip"
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="owner-products-list">
        {products.map((item) => {
          const tone = getStockTone(item);
          const category = getCategory(item);
          return (
            <article key={item.sku} className="owner-products-item">
              <div className="owner-products-thumb">{item.sku.slice(-3)}</div>

              <div className="owner-products-copy">
                <div className="owner-products-topline">
                  <span>{category}</span>
                  <div className="owner-products-actions">
                    <Link href={`/owner/produk/${item.sku}`} className="owner-products-iconbtn">
                      EDT
                    </Link>
                    <button type="button" className="owner-products-iconbtn owner-products-iconbtn-danger">
                      DEL
                    </button>
                  </div>
                </div>

                <h3>{item.name}</h3>
                <p>{item.price}</p>

                <div className="owner-products-stockline">
                  <b
                    className={
                      tone === "critical"
                        ? "owner-products-badge owner-products-badge-critical"
                        : tone === "warning"
                          ? "owner-products-badge owner-products-badge-warning"
                          : "owner-products-badge owner-products-badge-safe"
                    }
                  >
                    {getStockLabel(item)}
                  </b>
                  <span
                    className={
                      tone === "critical"
                        ? "owner-products-stock owner-products-stock-critical"
                        : "owner-products-stock"
                    }
                  >
                    Stok: {item.stock} unit
                  </span>
                </div>
              </div>
            </article>
          );
        })}
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
