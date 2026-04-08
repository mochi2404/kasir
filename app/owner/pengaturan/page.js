import { DashboardShell } from "@/components/dashboard-shell";
import { ownerMenu } from "@/components/menus";
import { SettingsReference } from "@/components/settings-reference";

export default function OwnerSettingsPage() {
  return (
    <DashboardShell
      title="Pengaturan Toko"
      subtitle="Atur identitas toko, metode pembayaran, pajak, dan tampilan struk."
      role="owner"
      menu={ownerMenu}
    >
      <SettingsReference />
    </DashboardShell>
  );
}
