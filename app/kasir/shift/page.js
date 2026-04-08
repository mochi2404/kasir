import { DashboardShell } from "@/components/dashboard-shell";
import { cashierMenu } from "@/components/menus";
import { ShiftReference } from "@/components/shift-reference";

export default function CashierShiftPage() {
  return (
    <DashboardShell
      title="Shift dan Kas Opname"
      subtitle="Buka shift, pantau transaksi, lalu tutup shift dengan perhitungan yang jelas."
      role="kasir"
      menu={cashierMenu}
    >
      <ShiftReference mode="kasir" />
    </DashboardShell>
  );
}
