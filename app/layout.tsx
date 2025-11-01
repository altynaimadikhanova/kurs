import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Kurs Info | Командный проект",
  description: "Сайт с курсами от команды",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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