import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "Egyptian Oracle · Discover Your True Destiny",
  description:
    "The first horoscope based on genuine Ancient Egyptian papyri. Your protective god. Your ancestral predictions. Available on iOS.",
  openGraph: {
    title: "Egyptian Oracle · Discover Your True Destiny",
    description:
      "The first horoscope based on genuine Ancient Egyptian papyri.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="bg-slate-950 text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
