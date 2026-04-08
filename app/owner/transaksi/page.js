import { DashboardShell } from "@/components/dashboard-shell";
import { ownerMenu } from "@/components/menus";
import { transactionRecords } from "@/components/mock-data";
import { TransactionHistoryReference } from "@/components/transaction-reference";

export default function OwnerTransactionsPage() {
  return (
    <DashboardShell
      title="Riwayat Transaksi"
      subtitle="Audit penjualan dengan filter tanggal, kasir, dan metode pembayaran."
      role="owner"
      menu={ownerMenu}
    >
      <TransactionHistoryReference
        title="Riwayat Transaksi"
        subtitle="Kelola dan pantau seluruh arus kas keluar masuk melalui rekaman digital yang presisi dan transparan."
        records={transactionRecords}
        detailBasePath="/owner/transaksi"
      />
    </DashboardShell>
  );
}
