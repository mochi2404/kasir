import { notFound } from "next/navigation";
import { DashboardShell } from "@/components/dashboard-shell";
import { cashierMenu } from "@/components/menus";
import { getTransactionById } from "@/components/mock-data";
import { TransactionDetailCard } from "@/components/transaction-reference";

export default async function CashierTransactionDetailPage({ params }) {
  const resolvedParams = await params;
  const transaction = getTransactionById(resolvedParams.id);

  if (!transaction) {
    notFound();
  }

  return (
    <DashboardShell
      title={`Detail ${transaction.id}`}
      subtitle="Halaman detail transaksi untuk verifikasi ulang item, total, dan pembayaran."
      role="kasir"
      menu={cashierMenu}
    >
      <TransactionDetailCard
        transaction={transaction}
        backHref="/kasir/riwayat"
        backLabel="Kembali ke Riwayat"
      />
    </DashboardShell>
  );
}
