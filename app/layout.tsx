import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Kurs Info",
  description: "Сайт покупки онлайн-курса",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <SiteHeader />
        <main className="page">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
