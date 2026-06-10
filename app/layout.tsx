import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IGANO — Noodles and Buns | Asian Street Food in Kavala",
  description:
    "Wok-fried noodles and steamed bao buns in the heart of Kavala. Order online via Wolt and E-food, or visit us at Dagkli 4. Open daily until late.",
  keywords: [
    "IGANO",
    "noodles Kavala",
    "bao buns Kavala",
    "asian street food",
    "delivery Kavala",
  ],
  openGraph: {
    title: "IGANO — Noodles and Buns",
    description:
      "Wok-fried noodles & steamed bao buns in Kavala. Order on Wolt or E-food.",
    locale: "el_GR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}