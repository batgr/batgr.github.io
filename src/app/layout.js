import { roboto } from "@/app/ui/font";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
