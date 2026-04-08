export function StockReference({ adjustments }) {
  const criticalItems = adjustments.filter(
    (item) => item.status === "Kritis" || item.status === "Habis"
  );

  return (
    <section className="stock-reference">
      <section className="stock-alert-card">
        <div className="stock-alert-copy">
          <div className="stock-alert-icon">!</div>
          <div>
            <h2>Notifikasi Stok Kritis</h2>
            <p>
              {criticalItems.length} produk berada di bawah ambang batas minimum.
              Segera lakukan restok.
            </p>
          </div>
        </div>
        <button className="btn stock-alert-btn">Selesaikan Sekarang</button>
      </section>

      <div className="stock-layout">
        <div className="stock-main">
          <div className="stock-main-head">
            <h3>Inventaris Saat Ini</h3>
            <div className="quick-actions">
              <button className="btn btn-secondary">Filter</button>
              <button className="btn btn-primary">Penyesuaian</button>
            </div>
          </div>

          <section className="directory-table-card">
            <div className="table-wrap">
              <table className="reference-table stock-table">
                <thead>
                  <tr>
                    <th>Produk</th>
                    <th>Kategori</th>
                    <th className="text-right">Stok</th>
                    <th className="text-right">Min. Stok</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {adjustments.slice(0, 3).map((item) => (
                    <tr key={`${item.product}-${item.updated}`}>
                      <td>
                        <div className="stock-product-cell">
                          <div className="stock-thumb">{item.product.slice(0, 2).toUpperCase()}</div>
                          <strong>{item.product}</strong>
                        </div>
                      </td>
                      <td>{item.category}</td>
                      <td className="text-right">
                        {item.current} <span className="stock-unit">{item.unit}</span>
                      </td>
                      <td className="text-right">
                        {item.minimum} <span className="stock-unit">{item.unit}</span>
                      </td>
                      <td>
                        <span className={`stock-status ${item.status === "Aman" ? "stock-status-safe" : "stock-status-danger"}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="stock-history">
            <h3>Riwayat Penyesuaian</h3>
            <div className="stock-history-list">
              {adjustments.slice(2).map((item) => (
                <article
                  className={`stock-history-card ${item.change.startsWith("+") ? "stock-history-positive" : "stock-history-negative"}`}
                  key={`${item.product}-${item.updated}-history`}
                >
                  <div className="stock-history-icon">
                    {item.change.startsWith("+") ? "IN" : "OUT"}
                  </div>
                  <div className="stock-history-main">
                    <div className="stock-history-top">
                      <h4>
                        {item.change.startsWith("+") ? "Restok" : "Penyesuaian"}: {item.product}
                      </h4>
                      <span>{item.updated}</span>
                    </div>
                    <div className="stock-history-meta">
                      <b>{item.change}</b>
                      <span>Oleh: {item.actor}</span>
                    </div>
                    <p>{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="stock-side">
          <article className="stock-health-card">
            <span>Kesehatan Inventaris</span>
            <strong>84%</strong>
            <div className="stock-health-meta">
              <div>
                <span>Total Unit</span>
                <b>1,240</b>
              </div>
              <div className="stock-health-bar">
                <div className="stock-health-fill" />
              </div>
              <p>
                Inventaris kamu stabil, tetapi 3 item masih menunggu restok.
              </p>
            </div>
          </article>

          <article className="stock-quick-card">
            <h5>Aksi Cepat</h5>
            <div className="stock-quick-grid">
              <button className="stock-quick-btn">Audit Stok</button>
              <button className="stock-quick-btn">Ekspor PDF</button>
              <button className="stock-quick-btn">Log Lengkap</button>
              <button className="stock-quick-btn">Atur Alert</button>
            </div>
          </article>

          <article className="stock-watch-card">
            <div className="stock-watch-head">
              <h5>Perlu Perhatian</h5>
              <b>Urgent</b>
            </div>
            <ul className="stock-watch-list">
              <li>
                <strong>Brown Sugar</strong>
                <span>Sisa 500gr (Min 2kg)</span>
              </li>
              <li>
                <strong>Paper Cup 8oz</strong>
                <span>Sisa 50 pcs (Min 500 pcs)</span>
              </li>
            </ul>
          </article>
        </aside>
      </div>
    </section>
  );
}
