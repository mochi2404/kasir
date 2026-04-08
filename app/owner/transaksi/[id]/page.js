import { notFound } from "next/navigation";
import { DashboardShell } from "@/components/dashboard-shell";
import { ownerMenu } from "@/components/menus";
import { getTransactionById } from "@/components/mock-data";
import { TransactionDetailCard } from "@/components/transaction-reference";

export default async function OwnerTransactionDetailPage({ params }) {
  const resolvedParams = await params;
  const transaction = getTransactionById(resolvedParams.id);

  if (!transaction) {
    notFound();
  }

  return (
    <DashboardShell
      title={`Detail ${transaction.id}`}
      subtitle="Periksa item transaksi, pembayaran, dan data kasir secara lengkap."
      role="owner"
      menu={ownerMenu}
    >
      <TransactionDetailCard
        transaction={transaction}
        backHref="/owner/transaksi"
        backLabel="Kembali ke Riwayat"
      />
    </DashboardShell>
  );
}
