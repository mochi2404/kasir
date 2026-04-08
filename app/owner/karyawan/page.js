import { DashboardShell } from "@/components/dashboard-shell";
import { ownerMenu } from "@/components/menus";
import { employees } from "@/components/mock-data";
import { EmployeeDirectoryReference } from "@/components/employee-directory-reference";

export default function OwnerEmployeesPage() {
  return (
    <DashboardShell
      title="Data Karyawan"
      subtitle="Kelola akun owner dan kasir dengan status akses yang jelas."
      role="owner"
      menu={ownerMenu}
    >
      <EmployeeDirectoryReference employees={employees} />
    </DashboardShell>
  );
}
