import { DashboardShell } from "@/components/dashboard-shell";
import { cashierMenu } from "@/components/menus";
import { transactionRecords } from "@/components/mock-data";
import { TransactionHistoryReference } from "@/components/transaction-reference";

export default function CashierHistoryPage() {
  return (
    <DashboardShell
      title="Riwayat Transaksi"
      subtitle="Kasir dapat melihat transaksi miliknya berdasarkan shift atau hari ini."
      role="kasir"
      menu={cashierMenu}
    >
      <TransactionHistoryReference
        title="Riwayat Transaksi Kasir"
        subtitle="Lihat transaksi shift aktif dan buka detail pembayaran bila perlu pengecekan ulang."
        eyebrow="Operasional"
        records={transactionRecords.filter((item) => item.cashier !== "Andi Wijaya")}
        detailBasePath="/kasir/riwayat"
      />
    </DashboardShell>
  );
}
