import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Egyptian Oracle · Découvre ton vrai destin",
  description:
    "Le premier horoscope basé sur les véritables papyrus de l'Égypte Antique. Ton Dieu protecteur. Tes prédictions ancestrales. Disponible sur iOS.",
  openGraph: {
    title: "Egyptian Oracle · Découvre ton vrai destin",
    description:
      "Le premier horoscope basé sur les véritables papyrus de l'Égypte Antique.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
