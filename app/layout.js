import "./globals.css";

export const metadata = {
  title: "Kasir Digital",
  description: "Sistem kasir digital untuk owner dan kasir.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
