import { DashboardShell } from "@/components/dashboard-shell";
import { ownerMenu } from "@/components/menus";
import { EmployeeDetailReference } from "@/components/employee-reference";

export default function NewEmployeePage() {
  return (
    <DashboardShell
      title="Tambah Karyawan"
      subtitle="Buat akun baru dan tentukan role serta cabang penempatan."
      role="owner"
      menu={ownerMenu}
    >
      <EmployeeDetailReference mode="new" />
    </DashboardShell>
  );
}
