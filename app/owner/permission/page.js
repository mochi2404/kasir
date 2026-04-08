import { DashboardShell } from "@/components/dashboard-shell";
import { ownerMenu } from "@/components/menus";
import { PermissionReference } from "@/components/permission-reference";

export default function OwnerPermissionPage() {
  return (
    <DashboardShell
      title="Hak Akses dan Permission"
      subtitle="Atur batas akses menu dan aksi penting per role."
      role="owner"
      menu={ownerMenu}
    >
      <PermissionReference />
    </DashboardShell>
  );
}
