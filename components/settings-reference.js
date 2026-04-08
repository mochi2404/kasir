export function SettingsReference() {
  return (
    <section className="settings-reference">
      <div className="settings-heading">
        <h2>Settings</h2>
        <p>
          Manage your store&apos;s configuration, payment methods, and compliance
          settings from one centralized dashboard.
        </p>
      </div>

      <div className="settings-layout">
        <aside className="settings-nav">
          <button className="settings-tab settings-tab-active">Profil Toko</button>
          <button className="settings-tab">Pembayaran</button>
          <button className="settings-tab">Pajak</button>
          <button className="settings-tab">Struk</button>
        </aside>

        <div className="settings-main">
          <section className="settings-card">
            <div className="settings-card-head">
              <h3>Profil Toko</h3>
              <button className="btn btn-primary">Save Changes</button>
            </div>

            <div className="settings-profile-grid">
              <div className="settings-logo-col">
                <label>Store Brand Logo</label>
                <div className="settings-logo-box">
                  <div className="settings-logo-overlay">
                    <span>Change Logo</span>
                  </div>
                </div>
                <p>Recommended size: 512x512px. JPG or PNG.</p>
              </div>

              <div className="settings-fields-col">
                <label>
                  <span>Store Name</span>
                  <input type="text" defaultValue="Kasir Digital Store" />
                </label>
                <label>
                  <span>Contact Email</span>
                  <input type="email" defaultValue="halo@tokokamu.id" />
                </label>
              </div>
            </div>

            <div className="settings-full-field">
              <label>
                <span>Store Address</span>
                <textarea rows="3" defaultValue="Jl. Senopati No. 12, Kebayoran Baru, Jakarta Selatan, 12190" />
              </label>
            </div>

            <div className="settings-map-box">Store Location Preview</div>
          </section>

          <section className="settings-card">
            <h3>Jam Operasional</h3>
            <div className="settings-hours-grid">
              <article className="hour-card">
                <div className="hour-card-top">
                  <strong>Weekday</strong>
                  <span>schedule</span>
                </div>
                <div className="hour-inputs">
                  <input type="text" defaultValue="09:00" />
                  <span>-</span>
                  <input type="text" defaultValue="21:00" />
                </div>
              </article>

              <article className="hour-card">
                <div className="hour-card-top">
                  <strong>Saturday</strong>
                  <span>schedule</span>
                </div>
                <div className="hour-inputs">
                  <input type="text" defaultValue="10:00" />
                  <span>-</span>
                  <input type="text" defaultValue="23:00" />
                </div>
              </article>

              <article className="hour-card hour-card-closed">
                <div className="hour-card-top">
                  <strong>Sunday</strong>
                  <b>Closed</b>
                </div>
                <div className="hour-inputs">
                  <input type="text" defaultValue="--" />
                  <span>-</span>
                  <input type="text" defaultValue="--" />
                </div>
              </article>
            </div>
          </section>

          <div className="settings-footer-actions">
            <button className="btn btn-secondary">Reset All Fields</button>
            <button className="btn btn-primary">Update Store Profile</button>
          </div>
        </div>
      </div>
    </section>
  );
}
