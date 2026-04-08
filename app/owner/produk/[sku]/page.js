import { notFound } from "next/navigation";
import { DashboardShell } from "@/components/dashboard-shell";
import { ownerMenu } from "@/components/menus";
import { getProductBySku } from "@/components/mock-data";
import { ProductDetailReference } from "@/components/product-reference";

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const product = getProductBySku(resolvedParams.sku);

  if (!product) {
    notFound();
  }

  return (
    <DashboardShell
      title={`Produk ${product.name}`}
      subtitle="Edit informasi produk, harga, stok, dan media dalam satu halaman."
      role="owner"
      menu={ownerMenu}
    >
      <ProductDetailReference product={product} mode="detail" />
    </DashboardShell>
  );
}
