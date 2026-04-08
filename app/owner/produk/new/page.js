import { DashboardShell } from "@/components/dashboard-shell";
import { ownerMenu } from "@/components/menus";
import { ProductDetailReference } from "@/components/product-reference";

export default function NewProductPage() {
  return (
    <DashboardShell
      title="Tambah Produk"
      subtitle="Tambahkan produk baru dengan data harga, stok, dan media yang lengkap."
      role="owner"
      menu={ownerMenu}
    >
      <ProductDetailReference mode="new" />
    </DashboardShell>
  );
}
