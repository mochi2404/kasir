import Link from "next/link";

function methodClass(method) {
  if (method === "QRIS") return "badge badge-success";
  if (method === "Tunai") return "badge badge-neutral";
  return "badge badge-accent";
}

export function TransactionHistoryReference({
  title,
  subtitle,
  eyebrow = "Administrasi",
  records,
  detailBasePath,
}) {
  return (
    <section className="history-reference">
      <div className="editorial-header">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="history-filter-grid">
        <article className="filter-card filter-card-wide">
          <label>Cari Transaksi</label>
          <div className="input-icon-wrap">
            <span className="mini-icon">search</span>
            <input type="text" placeholder="Masukkan nomor transaksi..." />
          </div>
        </article>

        <article className="filter-card">
          <label>Tanggal</label>
          <div className="input-icon-wrap">
            <span className="mini-icon">event</span>
            <input type="date" />
          </div>
        </article>

        <article className="filter-card">
          <label>Kasir</label>
          <select defaultValue="Semua Kasir">
            <option>Semua Kasir</option>
            <option>Nadia Aulia</option>
            <option>Raka Pratama</option>
            <option>Andi Wijaya</option>
          </select>
        </article>
      </div>

      <section className="history-table-card">
        <div className="table-wrap">
          <table className="reference-table">
            <thead>
              <tr>
                <th>No Transaksi</th>
                <th>Tanggal/Jam</th>
                <th>Kasir</th>
                <th>Metode Bayar</th>
                <th className="text-right">Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {records.map((item) => (
                <tr key={item.id}>
                  <td className="td-strong">{item.id}</td>
                  <td>
                    <div className="stacked-copy">
                      <strong>{item.dateLabel}</strong>
                      <span>{item.timeLabel}</span>
                    </div>
                  </td>
                  <td>{item.cashier}</td>
                  <td>
                    <span className={methodClass(item.method)}>{item.method}</span>
                  </td>
                  <td className="td-total">{item.total}</td>
                  <td className="text-right">
                    <Link href={`${detailBasePath}/${item.id}`} className="icon-link">
                      Lihat
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination-row">
          <span>
            Menampilkan <strong>1 - {records.length}</strong> dari{" "}
            <strong>128</strong> transaksi
          </span>
          <div className="pagination-actions">
            <button className="page-dot">{"<"}</button>
            <button className="page-dot page-dot-active">1</button>
            <button className="page-dot">2</button>
            <button className="page-dot">3</button>
            <button className="page-dot">{">"}</button>
          </div>
        </div>
      </section>
    </section>
  );
}

export function TransactionDetailCard({ transaction, backHref, backLabel }) {
  return (
    <section className="transaction-detail-reference">
      <div className="transaction-hero-grid">
        <article className="transaction-hero-card">
          <div className="transaction-hero-top">
            <div>
              <div className="hero-meta">
                <span className={methodClass(transaction.method)}>
                  {transaction.status === "Selesai" ? "Paid" : transaction.status}
                </span>
                <span>{transaction.dateLabel} | {transaction.timeLabel}</span>
              </div>
              <h2>{transaction.id}</h2>
              <p>
                Customer: <strong>{transaction.customer}</strong>
              </p>
            </div>
            <Link href={backHref} className="btn btn-secondary">
              {backLabel}
            </Link>
          </div>
          <div className="transaction-hero-actions">
            <button className="btn btn-primary">Cetak Ulang Struk</button>
            <button className="btn btn-secondary">Bagikan</button>
          </div>
        </article>

        <article className="transaction-amount-card">
          <span>Total Amount</span>
          <strong>{transaction.total}</strong>
          <div className="amount-pill">
            <span>{transaction.method}</span>
          </div>
        </article>
      </div>

      <div className="transaction-detail-layout">
        <div className="transaction-item-list">
          <h3>List Item</h3>
          {transaction.items.map((item) => (
            <article className="receipt-item-card" key={item.name}>
              <div className="receipt-thumb">{item.imageLabel || "ITEM"}</div>
              <div className="receipt-main">
                <h4>{item.name}</h4>
                <p>Unit Price: {item.price}</p>
              </div>
              <div className="receipt-side">
                <strong>{item.subtotal}</strong>
                <span>{item.qty} Qty</span>
              </div>
            </article>
          ))}
        </div>

        <aside className="summary-sticky-card">
          <h3>Summary</h3>
          <div className="summary-stack">
            <div><span>Subtotal</span><strong>{transaction.subtotal || transaction.total}</strong></div>
            <div><span>Discount</span><strong>{transaction.discount || "- Rp 0"}</strong></div>
            <div><span>Tax</span><strong>{transaction.tax || "Rp 0"}</strong></div>
            <div className="summary-grand"><span>Grand Total</span><strong>{transaction.total}</strong></div>
          </div>

          <div className="payment-box">
            <div><span>Payment Method</span><strong>{transaction.method}</strong></div>
            <div><span>Amount Tendered</span><strong>{transaction.paid}</strong></div>
            <div className="payment-change"><span>Change</span><strong>{transaction.change}</strong></div>
          </div>

          <div className="handled-by">Handled by: {transaction.cashier}</div>
        </aside>
      </div>
    </section>
  );
}
