import { DashboardShell, DataTable, Panel } from "@/components/dashboard-shell";
import { ownerMenu } from "@/components/menus";
import { promotions } from "@/components/mock-data";

export default function OwnerPromoPage() {
  return (
    <DashboardShell
      title="Promo dan Diskon"
      subtitle="Kelola promo aktif, terjadwal, dan riwayat campaign toko."
      role="owner"
      menu={ownerMenu}
    >
      <Panel title="Daftar Promo" action="Tambah Promo">
        <DataTable
          columns={["Nama Promo", "Jenis", "Periode", "Target", "Status"]}
          rows={promotions.map((item) => [
            item.name,
            item.type,
            item.period,
            item.target,
            item.status,
          ])}
        />
      </Panel>
      <Panel title="Buat Promo Baru">
        <form className="form-grid form-card">
          <label><span>Nama Promo</span><input type="text" placeholder="Happy Hour" /></label>
          <label><span>Jenis Promo</span><input type="text" placeholder="Diskon %" /></label>
          <label><span>Nilai Promo</span><input type="text" placeholder="10%" /></label>
          <label><span>Periode</span><input type="text" placeholder="08 Apr - 30 Apr" /></label>
          <label><span>Target Produk</span><input type="text" placeholder="Semua minuman" /></label>
          <button type="button" className="btn btn-primary">Simpan Promo</button>
        </form>
      </Panel>
    </DashboardShell>
  );
}
