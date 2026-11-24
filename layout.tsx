import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NusaKultur — Discover the Soul of Indonesia",
  description: "Discover Indonesia's living heritage, meet local communities, and experience culture with respect.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
