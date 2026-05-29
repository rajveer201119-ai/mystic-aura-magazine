import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mystic-aura-magazine.vercel.app"),
  title: {
    default: "Mystic Aura Magazine",
    template: "%s | Mystic Aura Magazine",
  },
  description:
    "Fashion, culture, lifestyle, and timeless stories from Mystic Aura Magazine.",
  openGraph: {
    title: "Mystic Aura Magazine",
    description:
      "Fashion, culture, lifestyle, and timeless stories from Mystic Aura Magazine.",
    siteName: "Mystic Aura Magazine",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
