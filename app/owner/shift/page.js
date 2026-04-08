import { DashboardShell } from "@/components/dashboard-shell";
import { ownerMenu } from "@/components/menus";
import { ShiftReference } from "@/components/shift-reference";

export default function OwnerShiftPage() {
  return (
    <DashboardShell
      title="Shift dan Kas Opname"
      subtitle="Pantau saldo awal, transaksi shift, dan selisih kas."
      role="owner"
      menu={ownerMenu}
    >
      <ShiftReference mode="owner" />
    </DashboardShell>
  );
}
