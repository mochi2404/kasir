import Link from "next/link";

export function ProductDetailReference({ product, mode = "new" }) {
  const isNew = mode === "new";

  return (
    <section className="product-reference">
      <div className="product-topbar">
        <div className="product-topbar-left">
          <Link href="/owner/produk" className="round-back">
            Kembali
          </Link>
          <h2>{isNew ? "Tambah Produk" : `Edit ${product.name}`}</h2>
        </div>
        <div className="product-topbar-actions">
          <Link href="/owner/produk" className="btn btn-secondary">
            Batal
          </Link>
          <button className="btn btn-primary">
            {isNew ? "Simpan Produk" : "Simpan Perubahan"}
          </button>
        </div>
      </div>

      <div className="product-layout">
        <div className="product-main-col">
          <section className="product-section">
            <div className="section-title-row">
              <div className="section-line section-line-primary" />
              <h3>Informasi Produk</h3>
            </div>
            <article className="product-panel">
              <div className="product-field-stack">
                <label>
                  <span>Nama Produk</span>
                  <input
                    type="text"
                    defaultValue={product?.name || ""}
                    placeholder="Contoh: Kopi Susu Gula Aren"
                  />
                </label>
              </div>
              <div className="product-form-grid">
                <label>
                  <span>SKU / Barcode</span>
                  <div className="suffix-input">
                    <input
                      type="text"
                      defaultValue={product?.sku || ""}
                      placeholder="Scan atau ketik SKU"
                    />
                    <strong>BARCODE</strong>
                  </div>
                </label>
                <label>
                  <span>Kategori</span>
                  <select defaultValue={product?.category || "Pilih Kategori"}>
                    <option>Pilih Kategori</option>
                    <option>Minuman</option>
                    <option>Makanan</option>
                    <option>Snack</option>
                    <option>Bakery</option>
                  </select>
                </label>
              </div>
            </article>
          </section>

          <div className="product-subgrid">
            <section className="product-section">
              <div className="section-title-row">
                <div className="section-line section-line-secondary" />
                <h3>Harga</h3>
              </div>
              <article className="product-panel">
                <div className="product-field-stack">
                  <label>
                    <span>Harga Modal</span>
                    <div className="prefix-input">
                      <span>Rp</span>
                      <input
                        type="text"
                        defaultValue={product?.costPrice?.replace("Rp ", "") || ""}
                        placeholder="0"
                      />
                    </div>
                  </label>
                  <label>
                    <span>Harga Jual</span>
                    <div className="prefix-input">
                      <span>Rp</span>
                      <input
                        type="text"
                        defaultValue={product?.salePrice?.replace("Rp ", "") || ""}
                        placeholder="0"
                      />
                    </div>
                  </label>
                </div>
              </article>
            </section>

            <section className="product-section">
              <div className="section-title-row">
                <div className="section-line section-line-accent" />
                <h3>Stok</h3>
              </div>
              <article className="product-panel">
                <div className="product-field-stack">
                  <label>
                    <span>Stok Awal</span>
                    <input
                      type="number"
                      defaultValue={product?.stock ?? ""}
                      placeholder="0"
                    />
                  </label>
                </div>
                <div className="info-box compact-box">
                  <div className="section-icon section-icon-primary">info</div>
                  <div>
                    <h4>Info Stok</h4>
                    <p>
                      Sistem akan memberi peringatan otomatis saat stok sudah
                      mendekati batas minimum.
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>

        <div className="product-side-col">
          <section className="product-section">
            <div className="section-title-row">
              <div className="section-line section-line-warm" />
              <h3>Media</h3>
            </div>
            <article className="product-panel">
              <div className="media-dropzone">
                <div className="media-dropzone-inner">
                  <div className="upload-badge">Foto</div>
                  <strong>Unggah Foto</strong>
                  <span>PNG, JPG hingga 5MB</span>
                </div>
              </div>
              <div className="thumb-grid">
                <div className="thumb-box">1</div>
                <div className="thumb-box">2</div>
                <div className="thumb-box">3</div>
              </div>
            </article>
          </section>

          <article className="help-card">
            <h3>Butuh Bantuan?</h3>
            <p>
              Pelajari cara mengoptimalkan manajemen stok dan integrasi barcode
              scanner untuk mempercepat proses kasir.
            </p>
            <button className="btn help-btn">Baca Panduan</button>
          </article>
        </div>
      </div>
    </section>
  );
}
