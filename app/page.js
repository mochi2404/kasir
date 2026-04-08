import Link from "next/link";

export default function HomePage() {
  return (
    <main className="marketing-shell">
      <section className="hero-panel">
        <span className="eyebrow">Kasir Digital</span>
        <h1>Operasional toko lebih cepat untuk kasir, lebih tajam untuk owner.</h1>
        <p>
          Project ini sekarang disiapkan sebagai aplikasi fullstack Next.js di
          Vercel, dengan API route backend, dashboard owner, dan workflow kasir
          yang sudah disesuaikan dari brief kamu.
        </p>
        <div className="hero-actions">
          <Link href="/login" className="btn btn-primary">
            Masuk ke Sistem
          </Link>
          <Link href="/owner/dashboard" className="btn btn-secondary">
            Lihat Demo Owner
          </Link>
          <Link href="/kasir/dashboard" className="btn btn-secondary">
            Lihat Demo Kasir
          </Link>
        </div>
      </section>
    </main>
  );
}
