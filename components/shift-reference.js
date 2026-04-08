export function ShiftReference({ mode = "owner" }) {
  const isOwner = mode === "owner";

  return (
    <section className="shift-reference">
      <section className="shift-editorial-header">
        <span className="eyebrow">Shift Operations</span>
        <div className="shift-header-row">
          <div>
            <h2>Kas Opname</h2>
            <p>Detailed reconciliation for Shift #4429 - 08 Apr 2026</p>
          </div>
          <div className="shift-duration-card">
            <div className="shift-duration-icon">TIME</div>
            <div>
              <span>Shift Duration</span>
              <strong>07:45:12</strong>
            </div>
          </div>
        </div>
      </section>

      <div className="shift-layout">
        <div className="shift-summary-col">
          <div className="shift-card-grid">
            <article className="shift-total-card">
              <div className="shift-total-head">
                <span className="shift-total-icon shift-total-icon-primary">RP</span>
                <b>TUNAI</b>
              </div>
              <p>Total Tunai</p>
              <strong>Rp 4.250.000</strong>
            </article>

            <article className="shift-total-card">
              <div className="shift-total-head">
                <span className="shift-total-icon shift-total-icon-secondary">CC</span>
                <b>NON-TUNAI</b>
              </div>
              <p>Total Non-Tunai</p>
              <strong>Rp 8.725.500</strong>
            </article>
          </div>

          <article className="shift-breakdown-card">
            <h3>Rincian Transaksi</h3>
            <div className="shift-breakdown-list">
              <div className="shift-breakdown-row">
                <div className="shift-breakdown-left">
                  <span className="shift-mini-icon shift-mini-icon-blue">QR</span>
                  <strong>QRIS / E-Wallet</strong>
                </div>
                <b>Rp 5.120.000</b>
              </div>
              <div className="shift-breakdown-row">
                <div className="shift-breakdown-left">
                  <span className="shift-mini-icon shift-mini-icon-indigo">DB</span>
                  <strong>Debit / Credit Card</strong>
                </div>
                <b>Rp 3.605.500</b>
              </div>
              <div className="shift-breakdown-row shift-breakdown-row-total">
                <div className="shift-breakdown-left">
                  <span className="shift-mini-icon shift-mini-icon-primary">TT</span>
                  <strong>Total Penjualan</strong>
                </div>
                <b>Rp 12.975.500</b>
              </div>
            </div>
          </article>
        </div>

        <aside className="shift-recon-card">
          <h3>{isOwner ? "Verifikasi Kas" : "Rehabilitasi Kas"}</h3>
          <div className="shift-recon-fields">
            <label>
              <span>Saldo Awal</span>
              <div className="prefix-input">
                <span>Rp</span>
                <input type="text" defaultValue="500.000" />
              </div>
            </label>

            <div className="shift-balance-box">
              <span>Saldo Tunai Seharusnya</span>
              <strong>Rp 4.750.000</strong>
              <p>(Awal Rp 500k + Tunai Rp 4.250k)</p>
            </div>

            <label>
              <span>Saldo Akhir Fisik</span>
              <div className="prefix-input">
                <span>Rp</span>
                <input type="text" placeholder="Masukkan jumlah fisik" />
              </div>
            </label>

            <div className="shift-variance-box">
              <div>
                <span>Selisih (Variance)</span>
                <strong>Rp 0</strong>
              </div>
              <b>!</b>
            </div>

            <button className="btn btn-primary shift-close-btn">
              {isOwner ? "Verifikasi Shift" : "Tutup Shift"}
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
