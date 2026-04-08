import { DashboardShell } from "@/components/dashboard-shell";
import { ownerMenu } from "@/components/menus";
import { stockAdjustments } from "@/components/mock-data";
import { StockReference } from "@/components/stock-reference";

export default function OwnerStockPage() {
  return (
    <DashboardShell
      title="Monitoring Stok"
      subtitle="Pantau stok kritis dan catat alasan penyesuaian barang."
      role="owner"
      menu={ownerMenu}
    >
      <StockReference adjustments={stockAdjustments} />
    </DashboardShell>
  );
}
