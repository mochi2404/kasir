import { notFound } from "next/navigation";
import { DashboardShell } from "@/components/dashboard-shell";
import { ownerMenu } from "@/components/menus";
import { EmployeeDetailReference } from "@/components/employee-reference";
import { getEmployeeById } from "@/components/mock-data";

export default async function EmployeeDetailPage({ params }) {
  const resolvedParams = await params;
  const employee = getEmployeeById(resolvedParams.id);

  if (!employee) {
    notFound();
  }

  return (
    <DashboardShell
      title={`Karyawan ${employee.name}`}
      subtitle="Lihat detail akun, role, dan penempatan cabang untuk karyawan ini."
      role="owner"
      menu={ownerMenu}
    >
      <EmployeeDetailReference employee={employee} mode="detail" />
    </DashboardShell>
  );
}
